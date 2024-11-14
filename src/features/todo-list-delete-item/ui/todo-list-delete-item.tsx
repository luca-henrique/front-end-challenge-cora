import { ReactNode } from "react"
import { useDeleteTaskItem } from "../model/use-delete-item"


interface ButtonToggleStatusTodoProps {
  id: string
  children: ReactNode
}


export const ButtonDeleteItem = ({ id, children }: ButtonToggleStatusTodoProps) => {
  const { deleteItem } = useDeleteTaskItem()

  return (<button onClick={() => deleteItem(id)}>{children}</button>)

}
