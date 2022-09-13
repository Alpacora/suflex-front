import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { useModal } from "../../contexts/modalContext";
import { REGISTER } from "../../service/apolloQuerys";
import { DefaultInput } from "../defaultInput";

export function RegisterModal() {

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [signUp, { data, loading, error }] = useMutation(REGISTER, { context: { clientName: 'baseEndpoint' } });

  const { setUser } = useAuth();
  const { handleSetModal } = useModal();

  function handleSignUp() {
    signUp({
      variables: {
        email,
        password,
        name
      },
      onCompleted: successfulRegister
    });
  }
  function successfulRegister(data: any) {
    const { handleCreateUser } = data;

    setUser({
      id: handleCreateUser.id,
      name: handleCreateUser.name,
      email: handleCreateUser.email,
      password: handleCreateUser.password,
      createdAt: handleCreateUser.createdAt
    })

    handleSetModal(null);
  }

  return (
    <div className="flex flex-col justify-between  items-center w-full h-[80%]">
      <DefaultInput
        marginVertical="5px"
        placeholder="Email"
        width="80%"
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
      />
      <DefaultInput
        marginVertical="5px"
        placeholder="Password"
        type='password'
        width="80%"
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <DefaultInput
        marginVertical="5px"
        placeholder="Name"
        width="80%"
        onChange={({ currentTarget }) => setName(currentTarget.value)}
      />
      <button className="w-[80%]" onClick={() => handleSignUp()}>Sign Up</button>
    </div>
  );
}
