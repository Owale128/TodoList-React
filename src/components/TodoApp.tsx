import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "../model/Todo";
import { Todos } from "./Todos";


export const TodoApp = () => {
    const[todos, setTodos] = useState<Todo[]>([])

    const createTodo = (todoText: string) => {
        setTodos([...todos, new Todo(todoText)])
    }

    const toggleTodo = (id: number) => {
        setTodos (
            todos.map((todo) => {
                if(todo.id === id){
                    return({...todo, done: !todo.done})
                } else {
                    return todo
                }
            })
        )
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return(
        <>
        <AddTodo addTodo={createTodo}/>
        <Todos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    )
}