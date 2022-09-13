import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { useModal } from "../../contexts/modalContext";
import { LOGIN } from "../../service/apolloQuerys";
import { DefaultInput } from "../defaultInput";
import { RegisterModal } from "../registerModal";

export function LoginModal() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [login, { data, loading, error }] = useMutation(LOGIN, { context: { clientName: 'baseEndpoint' } });

  const { setUser } = useAuth();
  const { handleSetModal } = useModal();

  function handleLogin() {
    login({
      variables: {
        email,
        password
      },
      onCompleted: successfulLogin
    });
  }
  function successfulLogin(data: any) {
    const { handleLogin } = data;

    setUser({
      id: handleLogin.id,
      name: handleLogin.name,
      email: handleLogin.email,
      password: handleLogin.password,
      createdAt: handleLogin.createdAt
    })

    handleSetModal(null);
  }

  return (
    <div className="flex flex-col justify-around items-center w-full h-[90%]">
      <DefaultInput
        placeholder="Email"
        width="80%"
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
      />
      <DefaultInput
        placeholder="Password"
        type='password'
        width="80%"
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <button className="w-[80%] mb-1" onClick={() => handleLogin()}>Login</button>
      <button className="w-[80%]" onClick={() => handleSetModal({ title: 'Sign Up', design: <RegisterModal /> })}>Sign Up</button>
    </div >
  );
}
