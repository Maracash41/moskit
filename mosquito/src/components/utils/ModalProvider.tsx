import React, { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextType {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  phoneNumber: string;
  handlePhoneNumberChange: (number: string) => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handlePhoneNumberChange = (number: string) => {
    setPhoneNumber(number);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpenModal,
        openModal,
        closeModal,
        phoneNumber,
        handlePhoneNumberChange,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = useContext(ModalContext);
