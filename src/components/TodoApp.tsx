import { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "../model/Todo";
import { Todos } from "./Todos";
import '../sass/main.scss'


export const TodoApp = () => {
    const todosInLocalStorage: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

    const[todos, setTodos] = useState<Todo[]>(todosInLocalStorage)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const createTodo = (todoText: string) => {
        setTodos([...todos, new Todo(todoText)])
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
            todo.id === id ? {...todo, done: !todo.done} : todo
            )
        )
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return(
        <>
        <h1>TodoList</h1>
        <div className="todosContainer">
        <AddTodo addTodo={createTodo}/>
        <Todos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </ div>
        </>
    )
}