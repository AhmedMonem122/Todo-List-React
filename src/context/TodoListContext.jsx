import { createContext, useEffect, useState } from "react";

const getLocalStorage = () => {
  let todoItems = localStorage.getItem("todoItems");
  if (todoItems) {
    return (todoItems = JSON.parse(localStorage.getItem("todoItems")));
  } else {
    return [];
  }
};

function TodoListProvider({ children }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoItems, setTodoItems] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleTodoSubmit = (e) => {
    e.preventDefault();

    if (todoTitle && !isEdit) {
      setTodoItems([
        ...todoItems,
        {
          id: Date.now(),
          title: todoTitle,
          isChecked: false,
        },
      ]);
      setTodoTitle("");
    } else if (todoTitle && isEdit) {
      setTodoItems(
        todoItems.map((item) => {
          if (item.id === editID) {
            return { ...item, title: todoTitle };
          }
          return item;
        })
      );
      setTodoTitle("");
      setEditID(null);
      setIsEdit(false);
    }
  };

  const clearItems = () => {
    setTodoItems([]);
  };

  const removeItem = (id) => {
    const removedItem = todoItems.filter((item) => item.id !== id);
    setTodoItems(removedItem);
    setIsEdit(false);
    setTodoTitle("");
  };

  const editItem = (id) => {
    const specificItem = todoItems.find((item) => item.id === id);
    setIsEdit(true);
    setEditID(id);
    setTodoTitle(specificItem.title);
  };

  const handleChecked = (id) => {
    const checkedItem = todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    setTodoItems(checkedItem);
  };

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <TodoListContext.Provider
      value={{
        handleTodoSubmit,
        todoTitle,
        setTodoTitle,
        todoItems,
        setTodoItems,
        clearItems,
        removeItem,
        isEdit,
        setIsEdit,
        editItem,
        handleChecked,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}

export const TodoListContext = createContext();

export default TodoListProvider;
