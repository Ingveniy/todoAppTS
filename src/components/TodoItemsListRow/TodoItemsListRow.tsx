import React from "react";

import { ITodoItemsListRow } from "../interfaces";
const TodoItemsListRow: React.FC<ITodoItemsListRow> = ({
  index,
  name,
  dateEnd,
  status,
}) => {
  return (
    <div className='todoItemsListRow'>
      <div>{index}</div>
      <div>{name}</div>
      <div>{dateEnd}</div>
      <div>{status}</div>
    </div>
  );
};

export default TodoItemsListRow;
