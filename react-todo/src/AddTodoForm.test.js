import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../AddTodoForm";

describe("AddTodoForm Component", () => {
  test("renders AddTodoForm component", () => {
    render(<AddTodoForm onAdd={() => {}} />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByRole("button", { name: /add todo/i });
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("calls onAdd when a new todo is added", () => {
    const onAdd = jest.fn();
    render(<AddTodoForm onAdd={onAdd} />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByRole("button", { name: /add todo/i });

    fireEvent.change(input, { target: { value: "Learn Jest" } });
    fireEvent.click(button);

    expect(onAdd).toHaveBeenCalledWith("Learn Jest");
  });
});
