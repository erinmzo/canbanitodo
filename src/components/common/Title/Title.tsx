type TitleProps = {
  title: string;
  category: string;
  date: string;
};
function Title({ title, category, date }: TitleProps) {
  return (
    <div className="mt-[60px]">
      {category === "normal" ? (
        <span className="text-primary-2 font-bold text-[18px]">보통</span>
      ) : (
        <span className="text-primary-3 font-bold text-[18px]">중요</span>
      )}
      <h2 className="py-5 text-[28px] font-bold border-b border-gray mb-5">{title}</h2>
      <span>{date}</span>
    </div>
  );
}

export default Title;
