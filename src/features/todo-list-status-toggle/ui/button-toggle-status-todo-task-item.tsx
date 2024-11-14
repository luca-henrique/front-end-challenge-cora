import { ReactNode } from "react"
import { StatusProps } from "../../../types/status"
import { useToggleStatusTaskItem } from "../model/use-toggle-status-task-item"


interface ButtonToggleStatusTodoProps {
  id: string
  status: StatusProps
  children: ReactNode
}


export const ButtonToggleStatusTodo = ({ id, status, children }: ButtonToggleStatusTodoProps) => {
  const { toggleStatus } = useToggleStatusTaskItem()

  return (<button onClick={() => toggleStatus(id, status)}>{children}</button>)

}
