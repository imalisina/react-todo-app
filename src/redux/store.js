import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './todo/reducerCombiner';

// Define the store for our states
export const store = createStore(reducers, applyMiddleware(thunk));