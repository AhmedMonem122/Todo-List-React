import { Button } from "react-bootstrap";
import useTodoList from "../../hooks/use-todo-list";
import { AiOutlineEdit, AiFillCheckCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

function TodoItem({ id, title, isChecked }) {
  const { removeItem, editItem, handleChecked } = useTodoList();

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark  mx-auto rounded text-white p-3 gap-3 mt-5 mb-3">
      <div className="me-auto">
        <p
          className={`${
            isChecked ? "text-decoration-line-through text-danger" : ""
          }`}
        >
          {title}
        </p>
      </div>
      <div>
        <Button variant="outline-success" onClick={() => handleChecked(id)}>
          <AiFillCheckCircle />
        </Button>
      </div>
      <div>
        <Button variant="outline-warning" onClick={() => editItem(id)}>
          <AiOutlineEdit />
        </Button>
      </div>
      <div>
        <Button variant="outline-danger" onClick={() => removeItem(id)}>
          <BsTrash />
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
