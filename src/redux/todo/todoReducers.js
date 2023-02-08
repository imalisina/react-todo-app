import { todoTypes } from './todoTypes';

// Define an initial state
const initialState = {
    todos: [],
    // state to limit the number of requests
    changes: true,
};

// Define a reducer for fetch todos
export const fetchTodosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case todoTypes.FETCH_TODOS:
            state.changes = true;
            setTimeout(() => state.changes = false, 1000);
            return { ...state, todos: payload };
        case todoTypes.REMOVE_TODO:
            state.changes = true;
            setTimeout(() => state.changes = false, 1000);
            return {state};
        case todoTypes.ADD_TODO:
            state.changes = true;
            setTimeout(() => state.changes = false, 1000);
            return {state};
        default:
            return state;
    }
}