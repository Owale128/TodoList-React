import { FormEvent, useState } from "react"
import '../sass/form.scss'


interface IAddTodoProps {
    addTodo: (todoText: string) => void;
}

export const AddTodo = ({addTodo}: IAddTodoProps) => {
    const[inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(inputValue.trim() ==='') {
            return
        }
        addTodo(inputValue)
        setInputValue('')
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            maxLength={15}
            placeholder="Add Todo"
            />
            <button>Spara</button>
        </form>
        </>
    )
}