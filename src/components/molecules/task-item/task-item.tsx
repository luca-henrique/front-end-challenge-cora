import { StatusProps } from "../../../types/status";
import { TaskProps } from "../../../types/task";

interface TaskItemProps {
  handleChangeTaskStatus: (id: string, status: StatusProps) => void;
  handleDeleteTask: (id: string) => void;
  item: TaskProps;
  taskIndex: number;
}

export const TaskItem = ({
  item,
  handleDeleteTask,
  handleChangeTaskStatus,
  taskIndex,
}: TaskItemProps) => {
  const { required, title, status, description, links, id } = item;
  return (
    <li>
      <span>
        {taskIndex}
        {required ? "*" : ""}.
      </span>
      <div className="todo__content">
        <h3>
          {title}
          <span data-type={status}>{status}</span>
        </h3>
        <p>{description}</p>
        {links && links.length > 0 && (
          <div className="todo__links">
            {links.map((link) => (
              <a key={link.name} target="_blank" href={link.url || link.link}>
                {link.name}
              </a>
            ))}
          </div>
        )}
        <div className="todo__actions">
          <button onClick={() => handleDeleteTask(id)}>delete</button>
          <button onClick={() => handleChangeTaskStatus(id, status)}>
            change to{" "}
            <strong>
              <u>{item.status === "done" ? "pending" : "done"}</u>
            </strong>
          </button>
        </div>
      </div>
    </li>
  );
};
