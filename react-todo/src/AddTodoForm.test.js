import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "./AddTodoForm";
import { useState } from "react";

const mockAddTodo = jest.fn();

describe("AddTodoForm", () => {
  test("adds a new todo when the form is submitted", () => {
    render(<AddTodoForm addTodo={mockAddTodo} />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: "New Todo" } });

    fireEvent.click(button);

    expect(mockAddTodo).toHaveBeenCalledWith("New Todo");

    expect(input.value).toBe("");
  });
});
// Ensure you export the component as default
export default AddTodoForm.test;
