import { TodoListContext } from "../../../app/provider/todo-list-provider"
import { useContext } from "react"



export const useToggleStatusTaskItem = () => {
  const { toggleStatus } = useContext(TodoListContext)
  return {
    toggleStatus
  }
}
