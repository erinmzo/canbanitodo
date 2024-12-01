import Content from "@/components/Read/Content";
import DeleteButton from "@/components/Read/DeleteButton";
import EditButton from "@/components/Read/EditButton";
import BackButton from "@/components/common/Button/BackButton";
import Container from "@/components/common/Page/Container";
import InneerContainer from "@/components/common/Page/InneerContainer";
import Title from "@/components/common/Title/Title";
import { todos } from "@/dummy/todos";

function TodoReadPage() {
  const todo = todos[0];
  const { title, category, content, date } = todo;
  return (
    <>
      <Container>
        <InneerContainer>
          <BackButton />
          <Title title={title} category={category} date={date} />
          <Content content={content} />
          <ul className="py-4 flex gap-2 justify-end items-center">
            <li>
              <EditButton />
            </li>
            <li>・</li>
            <li>
              <DeleteButton />
            </li>
          </ul>
        </InneerContainer>
      </Container>
    </>
  );
}

export default TodoReadPage;
