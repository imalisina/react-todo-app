import { todoTypes } from './todoTypes';
import axios from 'axios';

// Define API MAIN URL
const MAIN_URL = "http://localhost:8000/api/tasks";

// Define an async action to request todos from API 
export const fetchTodos = () => async (dispatch) => {
    const response = await axios.get(MAIN_URL);
    dispatch({type: todoTypes.FETCH_TODOS, payload: response.data});
}