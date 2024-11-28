import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  

  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            {...todo}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
}
