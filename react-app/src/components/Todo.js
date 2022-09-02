import { todoData } from "../MockData";
import { ListTodos } from "./ListTodos";

export const Todo = ({ todos }) => {
  return (
    <div>
      <ListTodos todos={todoData} />
    </div>
  );
};
