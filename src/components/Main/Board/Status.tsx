function Status() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-[15px] text-center font-bold text-[28px]">
      <li className="rounded-lg bg-primary-1 py-[23px]">진행 예정</li>
      <li className="rounded-lg bg-primary-2 py-[23px]">진행중</li>
      <li className="rounded-lg bg-primary-3 py-[23px]">완료</li>
    </ul>
  );
}

export default Status;
