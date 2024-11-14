import { render, screen, fireEvent } from "@testing-library/react";
import { TodoListFilter } from "./todo-list-filter";
import { jest } from "@jest/globals";
import React from "react";

jest.mock("../model/use-filter-todo", () => ({
  useTodoFilter: jest.fn(),
}));

describe("TodoListFilter", () => {
  it("should call handleChangeValueSearch when input value changes", () => {
    const mockHandleChangeValueSearch = jest.fn();
    const mockHandleSubmitSearch = jest.fn();

    jest.spyOn(React, "useContext").mockReturnValue({
      handleChangeValueSearch: mockHandleChangeValueSearch,
      handleSubmitSearch: mockHandleSubmitSearch,
    });



    render(<TodoListFilter />);

    fireEvent.change(screen.getByPlaceholderText("busca por texto..."), {
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
    const mockHandleChangeValueSearch = jest.fn();
    const mockHandleSubmitSearch = jest.fn();

    jest.spyOn(React, "useContext").mockReturnValue({
      handleChangeValueSearch: mockHandleChangeValueSearch,
      handleSubmitSearch: mockHandleSubmitSearch,
    });

    render(<TodoListFilter />);

    fireEvent.submit(screen.getByRole("button"));

    expect(mockHandleSubmitSearch).toHaveBeenCalled();
  });
});
