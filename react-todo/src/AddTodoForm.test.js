import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "./AddTodoForm";
import React from "react";
const mockAddTodo = jest.fn();

describe("TodoList Component", () => {
  test("renders initial todos correctly", () => {
    render(<TodoList />);
    const todo1 = screen.getByText("Learn React");
    const todo2 = screen.getByText("Build a Todo App");
    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "New Todo" } });

    fireEvent.click(button);

    expect(mockAddTodo).toHaveBeenCalledWith("New Todo");

    expect(input.value).toBe("");
  });
});
