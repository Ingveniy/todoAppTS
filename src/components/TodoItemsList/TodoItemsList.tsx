import React from "react";

import { ITodoItemsList } from "../interfaces";

import TodoItemsListRow from "../TodoItemsListRow";

const TodoItemsList: React.FC<ITodoItemsList> = ({ todoList = [] }) => {
  return (
    <div className='todoItemsList'>
      {todoList.map((todoItem, todoItemIndex) => (
        <TodoItemsListRow
          key={"todoRow" + todoItem.id}
          index={todoItemIndex}
          {...todoItem}
        />
      ))}
    </div>
  );
};
export default TodoItemsList;
