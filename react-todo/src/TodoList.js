import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders initial todos correctly", () => {
    render(<TodoList />);
    const todo1 = screen.getByText("Learn React");
    const todo2 = screen.getByText("Build a Todo App");
    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
  });

  test("allows adding a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByRole("button", { name: /add todo/i });

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    const newTodo = screen.getByText("New Todo");
    expect(newTodo).toBeInTheDocument();
  });

  test("allows toggling a todo's completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("allows deleting a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling; // Access delete button next to the todo

    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});
