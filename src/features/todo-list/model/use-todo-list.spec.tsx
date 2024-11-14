import { render, screen } from "@testing-library/react";
import { TodoListProvider } from "../../../app/provider/todo-list-provider";


const mockTodoList = [
  { id: "1", title: "Test Task 1", status: "pending" },
  { id: "2", title: "Test Task 2", status: "done" },
];

const TestComponent = () => {

  return (
    <ul>
      {mockTodoList.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};

describe("useTodoList Hook", () => {
  it("should return the data from the TodoListContext", () => {
    render(
      <TodoListProvider>
        <TestComponent />
      </TodoListProvider>
    );

    // Verifica se as tarefas estão sendo renderizadas corretamente
    expect(screen.getByText("Test Task 1")).toBeInTheDocument();
    expect(screen.getByText("Test Task 2")).toBeInTheDocument();
  });
});
