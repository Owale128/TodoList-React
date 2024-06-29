import { Todo } from "../model/Todo";

interface ITodoPresentation {
todo: Todo;
toggleTodo: (id: number) => void;
deleteTodo: (id: number) => void;
}

export const TodoPresentation = ({todo, toggleTodo, deleteTodo}: ITodoPresentation) => {

    return(
        <div>
            <span className={todo.done ? 'done': ''}>{todo.text}</span>
            <button onClick={() => toggleTodo(todo.id)}>{todo.done ? 'Undone': 'Done'}</button>
            <button onClick={() => deleteTodo(todo.id)}>Ta bort</button>
        </div>
    )
}