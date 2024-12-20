"use client";
import ChevronDownIcon from "@/components/common/Icon/ChevronDownIcon";
import { categories } from "@/constants/categoriesLabel";
import useSelectCategory from "@/hooks/useSelectCategory";
import { CategoryType } from "@/types/types";

function SelectCategory() {
  const { isShow, handleIsShow, selectCategory, handleSelectCategory } = useSelectCategory();

  return (
    <div>
      <div className="w-[115px] flex justify-between items-center py-2" onClick={handleIsShow}>
        <span className="font-bold text-[24px] cursor-pointer">{selectCategory ? selectCategory : "선택"}</span>
        <span className="cursor-pointer">
          <ChevronDownIcon width={24} height={13} />
        </span>
      </div>
      {isShow && (
        <ul className="bg-black absolute w-[130px] mt-1 -ml-1 text-[24px] font-bold py-2 rounded-lg">
          {categories.map((category: CategoryType) => {
            return (
              <li
                key={category.key}
                className="hover:bg-primary-3 px-4 py-2"
                onClick={() => handleSelectCategory(category.value)}
              >
                {category.value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SelectCategory;
