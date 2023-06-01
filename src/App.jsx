import { Button, Container } from "react-bootstrap";
import "./App.css";
import FormComponent from "./components/Form/FormComponent";
import TodoList from "./components/TodoList/TodoList";
import useTodoList from "./hooks/use-todo-list";

function App() {
  const { todoItems, clearItems } = useTodoList();

  return (
    <main>
      <h1 className="text-center mt-5">Todo List</h1>
      <div
        style={{ height: "500px" }}
        className="bg-danger mx-auto rounded py-1 overflow-x-scroll"
      >
        <FormComponent />
        <Container>
          <TodoList />
        </Container>
        {todoItems.length > 1 ? (
          <div className="bg-dark text-center w-25 mx-auto p-3 rounded-pill">
            <Button variant="outline-danger" onClick={clearItems}>
              Clear
            </Button>
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default App;
