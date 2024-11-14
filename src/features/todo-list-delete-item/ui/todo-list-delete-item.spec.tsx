import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonDeleteItem } from "./todo-list-delete-item";
import { useDeleteTaskItem } from "../model/use-delete-item";

jest.mock("../model/use-delete-item");

describe("ButtonDeleteItem Component", () => {
  it("should call deleteItem with the correct id when the button is clicked", () => {
    const mockDeleteItem = jest.fn();

    (useDeleteTaskItem as jest.Mock).mockReturnValue({
      deleteItem: mockDeleteItem,
    });

    render(<ButtonDeleteItem id="123">Delete</ButtonDeleteItem>);

    fireEvent.click(screen.getByText("Delete"));

    expect(mockDeleteItem).toHaveBeenCalledWith("123");
    expect(mockDeleteItem).toHaveBeenCalledTimes(1);
  });
});
