import TodoBoard from "@/components/Main/Board/TodoBoard";
import TodoForm from "@/components/Main/TodoForm.tsx/TodoForm";
import Container from "@/components/common/Page/Container";

function HomePage() {
  return (
    <Container>
      <TodoForm />
      <TodoBoard />
    </Container>
  );
}

export default HomePage;
