import { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "../model/Todo";
import { Todos } from "./Todos";
import '../sass/main.scss'
import { fetchTodos } from "../api/todoApi";

export const TodoApp = () => {

    const[todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const todosData = await fetchTodos()
                setTodos(todosData)
            } catch (error) {
                console.error('Error fetching todos:', error)
            }
        }
        fetchData();
    }, [])

    const createTodo = (todoText: string) => {
        setTodos([...todos, new Todo(todoText)])
       
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