import { render, screen } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders TodoList component", () => {
    render(<TodoList />);
    const titleElement = screen.getByText(/Todo List/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("displays initial demo todos", () => {
    render(<TodoList />);

    const demoTodos = ["Buy groceries", "Walk the dog", "Finish homework"];

    demoTodos.forEach((todo) => {
      const todoItem = screen.getByText(todo);
      expect(todoItem).toBeInTheDocument();
    });
  });
});
export default TodoList;
