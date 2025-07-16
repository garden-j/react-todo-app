import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryListState, IToDO, toDoState } from "../atoms";
import { Categories } from "../atoms";
import styled from "styled-components";
import { Btn } from "./ToDoList";

const Span = styled.span`
  font-size: 18px;
  margin: 0 10px 0 30px;
  border: 2px;
  background-color: whitesmoke;
  color: black;
  padding: 10px 18px 10px 18px;
  border-radius: 1cqi;
  border-color: whitesmoke;
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
    color: whitesmoke;
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 10fr 1fr 1fr 1fr 1fr;
  align-items: center;
`;

function ToDo({ text, category, id }: IToDO) {
  const categoryList = useRecoilValue(categoryListState);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <List>
        <Span>{text}</Span>
        {categoryList?.map(
          (cat) =>
            category !== cat && (
              <Btn key={cat} name={cat} onClick={onClick}>
                {cat}
              </Btn>
            )
        )}
      </List>
    </li>
  );
}

export default ToDo;
