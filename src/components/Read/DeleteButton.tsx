"use client";
import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";

function DeleteButton() {
  const context = useContext(ModalContext);
  if (context !== undefined) {
    const { openModal } = context;
    const handleDelete = (todoId: number) => {
      openModal({
        title: "할일을 삭제하시겠습니까?",
        onConfirm: () => {
          alert(`삭제되었습니다.${todoId}`);
        },
      });
    };

    return <button onClick={() => handleDelete(1)}>삭제</button>;
  }
}

export default DeleteButton;
