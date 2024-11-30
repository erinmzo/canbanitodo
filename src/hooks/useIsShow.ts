import { useState } from "react";

export default function useIsShow() {
  const [isShow, setIsShow] = useState(false);
  const handleIsShow = () => {
    setIsShow((prev) => !prev);
  };

  return { isShow, handleIsShow };
}
