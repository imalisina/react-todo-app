import { combineReducers } from 'redux';
import { fetchTodosReducer } from './todoReducers';

// Combine all of the reducers and store them in a single variable
const reducers = combineReducers({
    allTodos: fetchTodosReducer,
});

export default reducers;