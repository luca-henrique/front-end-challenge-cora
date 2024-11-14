import { useContext } from "react";

import { TodoListContext } from "../provider/todo-list-provider";

export const useTodoList = () => {
  const { data, deleteItem, toggleStatus } = useContext(TodoListContext);

  return {
    data,
    deleteItem,
    toggleStatus,
  };
};
