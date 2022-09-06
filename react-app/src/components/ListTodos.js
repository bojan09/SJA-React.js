export const ListTodos = ({ todos, markAsCompleted }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "mark-as-done" : ""}>
            <span>{todo.text}</span>
            <input
              type="checkbox"
              value={todo.completed}
              checked={todo.completed}
              onChange={() => markAsCompleted(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
