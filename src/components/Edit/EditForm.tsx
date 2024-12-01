import { todos } from "@/dummy/todos";
import BackButton from "../common/Button/BackButton";
import SubmitButton from "../common/Button/SubmitButton";
import Title from "../common/Title/Title";

function EditForm() {
  const todo = todos[0];
  const { title, category, date, content } = todo;
  return (
    <>
      <BackButton />
      <Title title={title} category={category} date={date} />
      <form className="flex flex-col gap-[30px] justify-center">
        <textarea className="resize-none content-box" defaultValue={content}></textarea>
        <SubmitButton />
      </form>
    </>
  );
}

export default EditForm;
