import { TaskItem } from "../../../shared/components/molecules/task-item/task-item";
import { useTodoList } from "../model/use-todo-list"

export const TodoList = () => {
  const { data } = useTodoList()

  return (
    <ul className="todo__list">
      {data.length === 0 && (
        <span>
          <strong>Ops!!!</strong> Nenhum resultado foi encontrado &#128533;
        </span>
      )}

      {data.map((item, index) => {
        return (
          <TaskItem
            taskIndex={index + 1}
            key={`${item.id}-${index}`}
            item={item}
          />
        );
      })}
    </ul>
  )
}
