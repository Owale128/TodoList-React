import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchTodos = async () => {
    try {
        const response = await axios.get(`${API_URL}/`);
        return response.data
    } catch (error) {
        console.error('Error fetching todos', error)
        throw error;
    }
};

export const createTodo = async (todoText: string, userId: string | null) => {
    try {
        const response = await axios.post(`${API_URL}/api/post`, {
            title: todoText,
            completed: false,
        });
        return response.data
    } catch (error) {
        console.error('Error creating todo:', error)
        throw error
    }
}

export const toggleTodo = async (id: string) => {
    try {
        await axios.put(`${API_URL}/api/complete/${id}`);
    } catch (error) {
        console.error('Error toggling todo:', error)
        throw error;
    }
}

export const deleteTodo = async (id: string) => {
    try {
        await axios.delete(`${API_URL}/api/delete/${id}`)
    } catch (error) {
        console.error('Error deleting todo:', error)
    }
}