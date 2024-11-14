import { render, screen, fireEvent } from "@testing-library/react";
import { useTodoFilter } from "./use-filter-todo"; // Importando o hook
import { TodoListContext } from "../../../app/provider/todo-list-provider"; // Contexto

describe("useTodoFilter Hook", () => {
  it("should call handleChangeValueSearch when input value changes", () => {
    // Criando um mock da função
    const mockHandleChangeValueSearch = jest.fn();

    // Renderizando um componente de teste que usa o hook dentro do TodoListContext.Provider
    const TestComponent = () => {
      const { handleChangeValueSearch } = useTodoFilter();
      return (
        <input
          placeholder="filter"
          type="text"
          onChange={(e) => handleChangeValueSearch(e)}
        />
      );
    };

    render(
      <TodoListContext.Provider
        value={{
          data: [],
          handleChangeValueSearch: mockHandleChangeValueSearch,
          handleSubmitSearch: jest.fn(),
          search: "",
          deleteItem: jest.fn(),
          toggleStatus: jest.fn(),
        }}
      >
        <TestComponent />
      </TodoListContext.Provider>
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Test" },
    });

    expect(mockHandleChangeValueSearch).toHaveBeenCalled();
    expect(mockHandleChangeValueSearch).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: "Test",
        }),
      })
    );
  });

  it("should call handleSubmitSearch when form is submitted", () => {
    const mockHandleSubmitSearch = jest.fn();

    const TestComponent = () => {
      const { handleSubmitSearch } = useTodoFilter();
      return (
        <form onSubmit={(e) => handleSubmitSearch(e)}>
          <button type="submit">Submit</button>
        </form>
      );
    };

    render(
      <TodoListContext.Provider
        value={{
          data: [],
          handleChangeValueSearch: jest.fn(),
          handleSubmitSearch: mockHandleSubmitSearch,
          search: "",
          deleteItem: jest.fn(),
          toggleStatus: jest.fn(),
        }}
      >
        <TestComponent />
      </TodoListContext.Provider>
    );

    fireEvent.submit(screen.getByText("Submit"));

    expect(mockHandleSubmitSearch).toHaveBeenCalled();
  });
});
