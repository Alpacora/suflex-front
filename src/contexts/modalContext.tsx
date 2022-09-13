import React, {
  createContext, useContext, useMemo, useState,
} from 'react';
import { BaseModal } from '../components/baseModal';
import { IChildren, IModal, IModalContext } from '../interfaces';
import { AuthProvider } from './authContext';

const ModalContext = createContext<IModalContext | null>(null);

function ModalProvider({ children }: IChildren) {
  const [modal, setModal] = useState<IModal | null>(null);

  const providerValues: IModalContext = useMemo(() => ({ handleSetModal: setModal }), []);

  return (
    <ModalContext.Provider
      value={providerValues}
    >
      <AuthProvider>
        {modal
          && (
            <BaseModal
              {...modal}
              handleCloseModal={() => setModal(null)}
            >
              {modal.design}
            </BaseModal>
          )}
        {children}
      </AuthProvider>
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Theme Context was used outside of its Provider');
  }
  return context;
}

export { ModalProvider, useModal };
