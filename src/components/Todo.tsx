import { Todo } from "../model/Todo";
import '../sass/main.scss'

interface ITodoPresentation {
todo: Todo;
toggleTodo: (id: string) => void;
deleteTodo: (id: string) => void;
}

export const TodoPresentation = ({todo, toggleTodo, deleteTodo}: ITodoPresentation) => {

    return(
        <div className="todoItem">
            <span className={todo.done ? 'done': ''}>{todo.title}</span>
            <div>
            <button onClick={() => toggleTodo(todo._id)} className="toggleBtn">{todo.done ? 'Oklar': 'Klar'}</button>
            <button onClick={() => deleteTodo(todo._id)} className="deleteBtn">Ta bort</button>
            </div>
        </div>
    )
}