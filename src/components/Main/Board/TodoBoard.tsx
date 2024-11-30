import Container from "@/components/common/Page/Container";
import Status from "./Status";
import TodoList from "./TodoList";

function TodoBoard() {
  return (
    <div className="my-[80px]">
      <Container>
        <Status />
        <TodoList />
      </Container>
    </div>
  );
}

export default TodoBoard;
