import { TodoType } from "@/types/types";

function TodoCard({ todo }: { todo: TodoType }) {
  const { title, content, status, category, date } = todo;

  return (
    <div className="py-4 px-4 border border-white rounded-lg bg-white/10">
      <div className="flex justify-between">
        {category === "normal" ? (
          <span className="text-primary-2 font-bold">보통</span>
        ) : (
          <span className="text-primary-3 font-bold">중요</span>
        )}
      </div>
      <h2 className="text-[28px] font-bold line-clamp-2 h-[110px] border-b border-gray py-4">{title}</h2>
      <p className="mt-2 text-gray">{date}</p>
    </div>
  );
}

export default TodoCard;
