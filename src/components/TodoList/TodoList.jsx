import { Fragment } from "react";
import useTodoList from "../../hooks/use-todo-list";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const { todoItems } = useTodoList();

  const renderedTodoItems = todoItems.map((item) => {
    return <TodoItem key={item.id} {...item} />;
  });

  return <Fragment>{renderedTodoItems}</Fragment>;
}

export default TodoList;
