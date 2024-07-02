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
