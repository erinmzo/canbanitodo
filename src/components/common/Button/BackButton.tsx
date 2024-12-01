"use client";
import { useRouter } from "next/navigation";
import LeftArrowIcon from "../Icon/LeftArrowIcon";

function BackButton() {
  const router = useRouter();
  const handleClickBack = () => {
    router.back();
  };
  return (
    <button
      className="w-[76px] h-[76px] bg-primary-3 rounded-full flex justify-center items-center"
      onClick={handleClickBack}
    >
      <LeftArrowIcon />
    </button>
  );
}

export default BackButton;
