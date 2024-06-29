import { Todo } from "../model/Todo";
import { TodoPresentation } from "./Todo";

interface ITodos {
    todos: Todo[]
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export const Todos = ({todos, toggleTodo, deleteTodo}: ITodos) => {

    return(
        <div>
        {todos.map((todo) =>(
            <TodoPresentation 
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
        ))}
        </div>
    )
}