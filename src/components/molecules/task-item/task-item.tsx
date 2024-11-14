import { TaskProps } from "../../../types/task";
import { ButtonDeleteItem } from "../../../features/todo-list-delete-item/ui/todo-list-delete-item";
import { ButtonToggleStatusTodo } from "../../../features/todo-list-status-toggle/ui/button-toggle-status-todo-task-item";


interface TaskItemProps {

  item: TaskProps;
  taskIndex: number;
}

export const TaskItem = ({
  item,
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
          <ButtonDeleteItem id={id}>delete</ButtonDeleteItem>
          <ButtonToggleStatusTodo id={id} status={status} >
            change to{" "}
            <strong>
              <u>{item.status === "done" ? "pending" : "done"}</u>
            </strong>
          </ButtonToggleStatusTodo>
        </div>
      </div>
    </li>
  );
};
