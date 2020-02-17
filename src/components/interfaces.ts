import { ReactNodeArray } from "react";

export interface INavbar {
  children: ReactNodeArray;
}

export interface IButton {
  title: string;
  onClick: Function;
}

export interface ITodoItemsList {
  todoList: { id: number; name: string; dateEnd: number; status: boolean }[];
}
export interface ITodoItemsListRow {
  id: number;
  name: string;
  dateEnd: number;
  status: boolean;
  index: number;
  key: string;
}
