import { todos } from "@/dummy/todos";
import { TodoType } from "@/types/types";
import Link from "next/link";
import SelectStatus from "./SelectStatus";
import TodoCard from "./TodoCard";

function TodoList() {
  const pedingTodos = todos.filter((todo) => todo.status === "pending") as TodoType[];
  const doingTodos = todos.filter((todo) => todo.status === "doing") as TodoType[];
  const doneTodos = todos.filter((todo) => todo.status === "done") as TodoType[];

  return (
    <div className="mt-[15px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
        <ul className="flex flex-col gap-[15px]">
          {pedingTodos.map((todo) => (
            <li key={todo.id} className="relative">
              <Link href={`/todo/read/${todo.id}`}>
                <TodoCard todo={todo} />
              </Link>
              <SelectStatus status={todo.status} />
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-[15px]">
          {doingTodos.map((todo) => (
            <li key={todo.id} className="relative">
              <Link href={`/todo/read/${todo.id}`}>
                <TodoCard todo={todo} />
              </Link>
              <SelectStatus status={todo.status} />
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-[15px]">
          {doneTodos.map((todo) => (
            <li key={todo.id} className="relative">
              <Link href={`/todo/read/${todo.id}`}>
                <TodoCard todo={todo} />
              </Link>
              <SelectStatus status={todo.status} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
