import SubmitButton from "../../common/Button/SubmitButton";
import InputTitle from "./InputTitle";
import SelectCategory from "./SelectCategory";

function TodoForm() {
  return (
    <form className="max-w-[470px] mx-auto flex flex-col justify-center">
      <SelectCategory />
      <InputTitle />
      <SubmitButton />
    </form>
  );
}

export default TodoForm;
