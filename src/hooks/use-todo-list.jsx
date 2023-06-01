import { useContext } from "react";
import { TodoListContext } from "../context/TodoListContext";

const useTodoList = () => {
  return useContext(TodoListContext);
};

export default useTodoList;
