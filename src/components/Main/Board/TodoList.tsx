import TodoColumn from "./TodoColumn";

function TodoList() {
  return (
    <div className="mt-[15px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
        <TodoColumn status="pending" />
        <TodoColumn status="doing" />
        <TodoColumn status="done" />
      </div>
    </div>
  );
}

export default TodoList;
