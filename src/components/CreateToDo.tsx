import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryListState, categoryState, toDoState } from "../atoms";
import ToDoList, { Form, Btn } from "./ToDoList";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  // const setState = useSetRecoilState(recoilState);
  const { handleSubmit, register, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: category },
      ...oldToDos,
    ]);
    /* setState((prev: any) => ({
      key: Date.now(),
      data: [{ text: toDo, id: Date.now(), category: category }],
    })); */
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Pleas write a To Do",
        })}
        placeholder="Write a to do"
      />
      <Btn>Add</Btn>
    </Form>
  );
}

export default CreateToDo;
