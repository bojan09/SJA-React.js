import { useState } from "react";
import { MockData } from "../MockData";
import { ListTodos } from "./ListTodos";
import { CreateTodo } from "./CreateTodo";

export const Todo = () => {
  const [todos, setTodos] = useState(MockData);

  const addTodo = (text) => {
    if (text === "") {
      alert("no emthy Todo");
      return;
    }
    const newTodos = {
      id: todos.length + 1,
      text,
      completed: "false",
    };

    setTodos([...todos, newTodos]);
  };

  const markAsCompleted = (id) => {
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    ]);
  };
  return (
    <div>
      <CreateTodo addTodo={addTodo} />
      <ListTodos todos={todos} markAsCompleted={markAsCompleted} />
    </div>
  );
};
