import { FormEvent, useState } from "react"

interface IAddTodoProps {
    addTodo: (todoText: string) => void;
}

export const AddTodo = ({addTodo}: IAddTodoProps) => {
    const[inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
         addTodo(inputValue)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button>Spara</button>
        </form>
        </>
    )
}