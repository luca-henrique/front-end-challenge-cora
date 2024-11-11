import { StatusProps } from "../../../types/status";
import { TaskProps } from "../../../types/task";
import { TaskItem } from "../../molecules/task-item/task-item";

interface TaskListProps {
  items: TaskProps[];
  handleChangeTaskStatus: (id: string, status: StatusProps) => void;
  handleDeleteTask: (id: string) => void;
}

export const TaskList = ({
  items,
  handleChangeTaskStatus,
  handleDeleteTask,
}: TaskListProps) => {
  return (
    <ul className="todo__list">
      {items.length === 0 && (
        <span>
          <strong>Ops!!!</strong> Nenhum resultado foi encontrado &#128533;
        </span>
      )}
      {items.map((item, index) => {
        return (
          <TaskItem
            taskIndex={index + 1}
            key={`${item.id}-${index}`}
            item={item}
            handleChangeTaskStatus={handleChangeTaskStatus}
            handleDeleteTask={handleDeleteTask}
          />
        );
      })}
    </ul>
  );
};
