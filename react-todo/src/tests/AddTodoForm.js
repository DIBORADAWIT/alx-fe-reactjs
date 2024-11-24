import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";
describe("TodoList Component", () => {
  test("allows adding a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByRole("button", { name: /add todo/i });

    fireEvent.change(input, { target: { value: "New Todo" } });

    fireEvent.click(addButton);

    const newTodo = screen.getByText("New Todo");
    expect(newTodo).toBeInTheDocument();
  });
});
