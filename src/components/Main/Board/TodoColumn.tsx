import { todos } from "@/dummy/todos";
import { Status, TodoType } from "@/types/types";
import Link from "next/link";
import SelectStatus from "./SelectStatus";
import TodoCard from "./TodoCard";

function TodoColumn({ status }: { status: Status }) {
  const todoByStatus = {
    pending: todos.filter((todo) => todo.status === "pending") as TodoType[],
    doing: todos.filter((todo) => todo.status === "doing") as TodoType[],
    done: todos.filter((todo) => todo.status === "done") as TodoType[],
  };

  return (
    <ul className="flex flex-col gap-[15px]">
      {todoByStatus[status].map((todo) => (
        <li key={todo.id} className="relative">
          <Link href={`/todo/read/${todo.id}`}>
            <TodoCard todo={todo} />
          </Link>
          <SelectStatus status={todo.status} />
        </li>
      ))}
    </ul>
  );
}

export default TodoColumn;
