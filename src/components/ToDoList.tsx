import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoSelector, categoryListState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import type { Categories } from "../atoms";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Header = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 45px;
  padding: 35px 0px 20px 0;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  input {
    padding: 8px 40px;
    border: none;
    border-radius: 20px;
    margin: 5px;
  }
`;

export const Btn = styled.button`
  border: none;
  border-radius: 20px;
  margin: 5px;
  padding: 10px;
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
    color: whitesmoke;
  }
`;

const Addtodo = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  select {
    border: none;
    border-radius: 20px;
    margin: 5px;
    padding: 10px;
    &:hover {
      background-color: ${(props) => props.theme.accentColor};
      color: whitesmoke;
    }
  }
`;

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
      <Header>To Dos</Header>

      <Form onSubmit={handleSubmit(handleValid)}>
        <input {...register("newCat")} placeholder="Write new category" />
        <Btn>Add Category</Btn>
      </Form>
      <Addtodo>
        <select value={category} onInput={onInput}>
          {categoryList?.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <CreateToDo />
      </Addtodo>

      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
