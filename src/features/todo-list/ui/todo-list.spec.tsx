import { render, screen } from "@testing-library/react";
import { TodoList } from "./todo-list";  // Componente a ser testado
import { useTodoList } from "../model/use-todo-list";  // Hook a ser mockado

// Mock do hook useTodoList
jest.mock("../model/use-todo-list");

describe("TodoList Component", () => {
  it("should render tasks when data is available", () => {
    // Mock de dados simulados de tarefas
    const mockTasks = [
      { id: "1", title: "Test Task 1", status: "pending" },
      { id: "2", title: "Test Task 2", status: "done" },
    ];

    // Mockando o retorno do useTodoList
    (useTodoList as jest.Mock).mockReturnValue({
      data: mockTasks,
    });

    // Renderizando o componente TodoList
    render(<TodoList />);

    // Verifica se as tarefas são renderizadas corretamente
    expect(screen.getByText("Test Task 1")).toBeInTheDocument();
    expect(screen.getByText("Test Task 2")).toBeInTheDocument();
  });

  it("should render no tasks found message when no data is available", () => {
    // Mockando o retorno do useTodoList com lista vazia
    (useTodoList as jest.Mock).mockReturnValue({
      data: [],
    });

    // Renderizando o componente TodoList
    render(<TodoList />);

    // Verifica se a mensagem de "Nenhum resultado foi encontrado" é exibida
    expect(screen.getByText("Nenhum resultado foi encontrado")).toBeInTheDocument();
  });
});
