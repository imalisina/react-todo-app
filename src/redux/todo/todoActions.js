import { todoTypes } from './todoTypes';
import axios from 'axios';

// Define API MAIN URL
const MAIN_URL = "http://localhost:8000/api/tasks";

// Define an async action to request all todos 
export const fetchTodos = () => async (dispatch) => {
    const response = await axios.get(MAIN_URL);
    dispatch({ type: todoTypes.FETCH_TODOS, payload: response.data });
}

// Define an async action to add new todo
export const addTodo = (newTodoTitle) => async (dispatch) => {
    await axios({
        method: 'post', url: MAIN_URL, data: {
            title: newTodoTitle,
        },
    },);
    dispatch({ type: todoTypes.ADD_TODO });
}

// Define an async action to remove a specific todo
export const removeTodo = (id) => async (dispatch) => {
    await axios.delete(`${MAIN_URL}/${id}`);
    dispatch({ type: todoTypes.REMOVE_TODO, payload: id });
}