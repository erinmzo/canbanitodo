"use client";
import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";
import WarningIcon from "../Icon/WarningIcon";

function Modal() {
  const context = useContext(ModalContext);
  if (context !== undefined) {
    const { title, onConfirm } = context.modalContent;
    const handleCancle = () => {
      context.closeModal();
    };
    const handleConfirm = () => {
      onConfirm();
      context.closeModal();
    };
    return (
      <div className="fixed left-0 right-0 top-0 bottom-0 w-full h-full bg-black/40 flex justify-center items-center">
        <div className="bg-white py-8 px-4 rounded-lg font-bold text-black w-[380px] flex flex-col items-center justify-center gap-4">
          <WarningIcon />
          <h3 className="text-[24px]">{title}</h3>
          <ul className="flex gap-2 items-center">
            <li>
              <button className="bg-primary-1 py-2 px-[25px] text-white rounded-lg text-[18px]" onClick={handleCancle}>
                취소
              </button>
            </li>
            <li>
              <button className="bg-primary-3 py-2 px-[25px] text-white rounded-lg text-[18px]" onClick={handleConfirm}>
                확인
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Modal;
