import Link from "next/link";

function EditButton() {
  const todoId = 1;
  return <Link href={`/todo/edit/${todoId}`}>수정</Link>;
}

export default EditButton;
