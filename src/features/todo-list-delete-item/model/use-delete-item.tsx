import { TodoListContext } from "../../../app/provider/todo-list-provider"
import { useContext } from "react"



export const useDeleteTaskItem = () => {
  const { deleteItem } = useContext(TodoListContext)
  return {
    deleteItem
  }
}
