import { useEffect, useState } from "react";
import logo from '../../assets/logo.svg';
import { useAuth } from "../../contexts/authContext";
import { useModal } from "../../contexts/modalContext";
import { LoginModal } from "../loginModal";

const HEADER_HEIGHT = 160;

export function Header() {
  const [small, setSmall] = useState(false);

  const { handleSetModal } = useModal();
  const { user, handleLogout } = useAuth();

  function handleOpenLoginModal() {
    handleSetModal({
      title: 'Login',
      design: <LoginModal />
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', () => setSmall(window.pageYOffset > HEADER_HEIGHT));
  }, []);

  return (
    <div className="flex justify-between px-5 items-center w-screen h-28 bg-slate-200 top-0 sticky z-50 drop-shadow-lg">
      <img src={logo} className="h-3/4" />
      {!user?.id ?
        <button onClick={handleOpenLoginModal}>
          Sign In / Sign Up
        </button>
        :
        <>
          <span className="text-black">Hello, {user?.name.split(' ')[0]}! Enjoy.</span>
          <button onClick={handleLogout}>
            LOGOUT
          </button>
        </>
      }

    </div >
  );
}
