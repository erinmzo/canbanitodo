import EditForm from "@/components/Edit/EditForm";
import Container from "@/components/common/Page/Container";
import InneerContainer from "@/components/common/Page/InneerContainer";

function TodoEditPage() {
  return (
    <Container>
      <InneerContainer>
        <EditForm />
      </InneerContainer>
    </Container>
  );
}

export default TodoEditPage;
