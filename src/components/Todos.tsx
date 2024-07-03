import { Todo } from "../model/Todo";
import { TodoPresentation } from "./Todo";

interface ITodos {
    todos: Todo[]
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}

export const Todos = ({todos, toggleTodo, deleteTodo}: ITodos) => {

    return(
        <div>
        {todos.map((todo) =>(
            <TodoPresentation 
            key={todo._id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
        ))}
        </div>
    )
}