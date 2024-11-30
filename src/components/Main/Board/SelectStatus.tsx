"use client";
import ChevronDownIcon from "@/components/common/Icon/ChevronDownIcon";
import { statusLabels } from "@/constants/statusLabel";
import useIsShow from "@/hooks/useIsShow";
import { Status } from "@/types/types";

function SelectStatus({ status }: { status: Status }) {
  const { isShow, handleIsShow } = useIsShow();
  const changableStatusLabels = Object.values(statusLabels).filter((label) => label !== status);

  return (
    <div className="absolute right-4 top-4">
      <div className="flex justify-end items-center gap-2" onClick={handleIsShow}>
        <span className="text-[14px] cursor-pointer">{statusLabels[status]}</span>
        <span>
          <ChevronDownIcon width={12} height={8} />
        </span>
      </div>
      {isShow && (
        <ul className="z-50 bg-black absolute mt-1 w-[90px] text-[14px] font-bold -ml-4 py-2 rounded-lg">
          {changableStatusLabels.map((label) => (
            <li key={label} className="py-1 px-4 hover:bg-primary-3">
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectStatus;
