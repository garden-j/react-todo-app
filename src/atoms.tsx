import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDO {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDO[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    if (category === Categories.TO_DO)
      return toDos.filter((toDo) => toDo.category === Categories.TO_DO);
    else if (category === Categories.DOING)
      return toDos.filter((toDo) => toDo.category === Categories.DOING);
    else return toDos.filter((toDo) => toDo.category === Categories.DONE);
  },
});
