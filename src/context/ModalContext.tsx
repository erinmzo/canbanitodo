"use client";
import Modal from "@/components/common/Modal/Modal";
import { PropsWithChildren, createContext, useState } from "react";

interface ModalContextProps {
  title: string;
  onConfirm: () => void;
}

interface ModalContextType {
  isOpen: boolean;
  modalContent: ModalContextProps;
  openModal: (modalContent: ModalContextProps) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

function ModalProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContextProps | null>(null);

  const openModal = (modalContent: ModalContextProps) => {
    setIsOpen(true);
    setModalContent(modalContent);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  const value = { isOpen, modalContent, openModal, closeModal } as ModalContextType;

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen && <Modal />}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
