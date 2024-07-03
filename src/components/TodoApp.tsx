import { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "../model/Todo";
import { Todos } from "./Todos";
import '../sass/main.scss'
import { createTodo, deleteTodo, fetchTodos, toggleTodo } from "../api/todoApi";

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

    const handleAddTodo = async (todoText: string) => {
        try{
            const newTodoData = await createTodo(todoText); 
            setTodos([...todos, newTodoData])
        } catch (error) {
            console.error('Error adding todo:', error)
        }
    }

    const handleToggleTodo = async (id: string) => {
        try {
            await toggleTodo(id)
            const updatedTodos = todos.map((todo) =>
                todo._id === id ? {...todo, done: !todo.done} : todo
            );
            setTodos(updatedTodos)
        } catch (error) {
            console.error('Error toggling todo:', error)
        }
    };

    const handleDeleteTodo = async (id: string) => {
        try {
            await deleteTodo(id)
            const filteredTodos = todos.filter((todo) => todo._id !== id)
            setTodos(filteredTodos)
        } catch (error) {
            console.error('Error deleting todo:', error)
        } 
    }

    return(
        <>
        <h1>TodoList</h1>
        <div className="todosContainer">
        <AddTodo addTodo={handleAddTodo}/>
        <Todos todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo} />
        </ div>
        </>
    )
}