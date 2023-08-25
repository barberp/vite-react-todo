import { TodoItem } from "./TodoItem"

export function TodoList({todos, deleteTodo, toggleTodo}) {
    return (
        <ul >
        {todos.length === 0 ? "No Todos" : todos.length + " Todos"}
        {todos.map(todo => {
          return     (
          <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        )
        })}
    
      </ul>
    )
}