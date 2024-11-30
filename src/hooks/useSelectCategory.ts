import { useState } from "react";
import useIsShow from "./useIsShow";

export default function useSelectCategory() {
  const { isShow, handleIsShow } = useIsShow();
  const [selectCategory, setSelectCategory] = useState<string | null>(null);

  const handleSelectCategory = (category: string) => {
    setSelectCategory(category);
    handleIsShow();
  };
  return { isShow, handleIsShow, selectCategory, handleSelectCategory };
}
