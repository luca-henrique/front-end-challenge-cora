import { TodoListContext } from "../../../app/provider/todo-list-provider";
import { useContext } from "react";

export const useTodoList = () => {
  const { data } = useContext(TodoListContext);

  return {
    data,
  };
};
