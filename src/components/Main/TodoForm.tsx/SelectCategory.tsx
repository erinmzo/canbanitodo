function SelectCategory() {
  return (
    <div>
      <div className="w-[115px] flex justify-between items-center py-2">
        <span className="font-bold text-[24px]">선택</span>
        <span>
          <svg width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L12.2683 11L23 1" stroke="white" stroke-width="2" />
          </svg>
        </span>
      </div>
      <ul className="bg-black absolute w-[115px] mt-1 text-[24px] font-bold">
        <li className="hover:bg-primary-3 py-2 px-4">중요</li>
        <li className="hover:bg-primary-3 py-2 px-4">보통</li>
      </ul>
    </div>
  );
}

export default SelectCategory;
