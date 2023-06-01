import { Button, Form } from "react-bootstrap";
import useTodoList from "../../hooks/use-todo-list";

function FormComponent() {
  const { todoTitle, setTodoTitle, isEdit, handleTodoSubmit } = useTodoList();

  return (
    <div className="text-center mt-5">
      <Form
        className="d-flex justify-content-center"
        onSubmit={handleTodoSubmit}
      >
        <Form.Group className="mb-3 me-3">
          <Form.Control
            className=""
            type="text"
            placeholder="Enter a Todo"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        </Form.Group>
        <div>
          <Button variant="primary" type="submit">
            {isEdit ? "Edit" : "Add"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormComponent;
