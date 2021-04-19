import { atom } from "recoil";
import { TODO_LIST_ATOM_KEY } from "../constants";
import { ITodo } from "./interfaces";

export const todoState = atom<{ todos: ITodo[] }>({
  key: TODO_LIST_ATOM_KEY,
  default: { todos: [] },
});
