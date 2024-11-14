import { render, screen, fireEvent } from "@testing-library/react";
import { useDeleteTaskItem } from "./use-delete-item"; // Hook a ser testado
import React from "react";

// Mockando o valor do contexto
const mockDeleteItem = jest.fn();

describe("useDeleteTaskItem Hook", () => {
  it("should call deleteItem when invoked", () => {
    jest.spyOn(React, "useContext").mockReturnValue({
      deleteItem: mockDeleteItem,
    });

    // Componente de teste
    const TestComponent = () => {
      const { deleteItem } = useDeleteTaskItem();
      return (
        <button onClick={() => deleteItem("1")}>Delete Task</button>
      );
    };

    render(<TestComponent />);

    fireEvent.click(screen.getByText("Delete Task"));

    expect(mockDeleteItem).toHaveBeenCalledWith("1");
    expect(mockDeleteItem).toHaveBeenCalledTimes(1);
  });
});
