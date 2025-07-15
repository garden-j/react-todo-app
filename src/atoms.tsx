import { atom } from "recoil";

export interface IToDO {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDO[]>({
  key: "toDo",
  default: [],
});
