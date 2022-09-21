import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, toggleCompleted, remove } from "../slices/todosSlice";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    if (event.key === "Enter") {
      console.log(event);
      dispatch(
        add({
          title: inputRef.current.value,
        })
      );
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <ol>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              color: todo.completed && "red",
              textDecoration: todo.completed && "line-through",
            }}
          >
            {todo.title}
            <button
              style={{ marginLeft: "50px" }}
              onClick={() => {
                dispatch(remove(todo.id));
              }}
            >
              Delete
            </button>

            <button
              onClick={() => {
                dispatch(toggleCompleted(todo.id));
              }}
            >
              Completed
            </button>
          </li>
        ))}
      </ol>
      <p>Click Enter to Add new Todo</p>
      <input ref={inputRef} onKeyDown={handleInputChange} />
    </div>
  );
};
