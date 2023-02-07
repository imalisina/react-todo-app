import { todoTypes } from './todoTypes';

// Define an initial state
const initialState = {
    todos: [],
};

// Define a reducer for fetch todos
export const fetchTodosReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case todoTypes.FETCH_TODOS:
            return {...state , todos : payload};
        case todoTypes.REMOVE_TODO:
            return state;
        default:
            return state;
    }
}