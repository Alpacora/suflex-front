import React, {
  useMemo,
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react';

import {
  IAuthContext,
  IChildren,
  IUser,
} from '../interfaces';

const AuthContext = createContext<IAuthContext | null>(null);

function AuthProvider({ children }: IChildren) {
  const [user, setUser] = useState<IUser | null>(null);

  const handleLogout = useCallback(() => {
    setUser(null);
    window.location.reload();
  }, []);

  const providerValues = useMemo(() => ({
    user, setUser, handleLogout,
  }), [user, setUser, handleLogout]);

  return (
    <AuthContext.Provider
      value={providerValues}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Theme Context was used outside of its Provider');
  }
  return context;
}

export { AuthProvider, useAuth };
