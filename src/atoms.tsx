import { atom, selector } from "recoil";

// categories.ts
export type Categories = string;

export interface IToDO {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom<IToDO[]>({
  key: "toDo",
  default: [],
});

export const categoryListState = atom<Categories[]>({
  key: "categoryList",
  default: ["TO_DO", "DOING", "DONE"],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
