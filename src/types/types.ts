export type CategoryType = {
  key: string;
  value: string;
};

export type Status = "pending" | "doing" | "done";
export type Category = "normal" | "primary";

export type TodoType = {
  id: number;
  title: string;
  content: string;
  status: Status;
  category: Category;
  date: string;
};
