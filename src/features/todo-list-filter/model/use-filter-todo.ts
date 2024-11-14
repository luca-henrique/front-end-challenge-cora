import { TodoListContext } from "../../../app/provider/todo-list-provider";
import { useContext } from "react";

export const useTodoFilter = () => {
  const { handleChangeValueSearch, handleSubmitSearch } =
    useContext(TodoListContext);

  return {
    handleChangeValueSearch,
    handleSubmitSearch,
  };
};
