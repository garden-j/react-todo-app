import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoSelector, categoryListState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import type { Categories } from "../atoms";
import { useForm } from "react-hook-form";

interface ICat {
  newCat?: string;
}

function ToDoList() {
  const [categoryList, setCategoryList] = useRecoilState(categoryListState);
  const { register, handleSubmit, setValue } = useForm<ICat>();

  const handleValid = ({ newCat }: ICat) => {
    if (newCat) {
      setCategoryList((old: any) => [...old, newCat]);
    }
    setValue("newCat", ""); // 입력창 초기화
  };

  const toDos = useRecoilValue(toDoSelector); // select array in the array
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        {categoryList?.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("newCat")} placeholder="Write new category" />
        <button>Add Category</button>
      </form>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
