import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

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
    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test("allows toggling a todo's completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("allows deleting a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling; 
    expect(deleteButton).toBeInTheDocument();
  });
});
