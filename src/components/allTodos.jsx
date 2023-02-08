import React, { useEffect, useState } from 'react';
// Redux hooks
import { useDispatch, useSelector } from 'react-redux';
// Todo actions
import { fetchTodos, removeTodo } from '../redux/todo/todoActions';

// Loading placeholder
import LoadingPlaceholder from './loadingPlaceholder';
// Success toast
import SuccessToast from './successToast';

const AllTodos = () => {
    // Difine a spinner status
    const [isLoading, setIsLoading] = useState(true);
    // Define toast visible status
    const [isVisible, setIsVisible] = useState(false);
    // Call useSelector to get all todos
    const todos = useSelector((state) => state.allTodos.todos);
    // Call useSelector to check for changes
    const changes = useSelector((state) => state.allTodos.changes);
    // Define the dispatch
    const dispatch = useDispatch();
    // Activate fetch todos request
    useEffect(() => {
        dispatch(fetchTodos());
        setTimeout(() => setIsLoading(false), 1500);
    }, [changes]);
    // Define a method to trigger remove todo action and display a success toast
    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id));
        setTimeout(() => setIsVisible(true), 1000);
        setTimeout(() => setIsVisible(false), 3000);
    }

    return (
        <>
            <dl className="mt-10 mx-auto max-w-md text-gray-600 divide-y divide-gray-300">
                {
                    !isLoading && todos != null
                        ? todos.map((todo, index) => {
                            return (
                                <div key={index} className="py-4 flex flex-row justify-between">
                                    <dd className="text-lg">{todo.title}</dd>
                                    {
                                        todo.description != null ? (<dd className='text-sm'>{todo.description}</dd>) : ""
                                    }
                                    <button onClick={() => removeTodoHandler(todo.id)} type="button" className="text-white bg-gray-400 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2">
                                        <svg className='w-4 h-4' fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <span className="sr-only">Icon description</span>
                                    </button>
                                </div>
                            );
                        })
                        : <LoadingPlaceholder />
                }
            </dl>
            {
                // Checking visible status to show success toast 
                isVisible ? (<SuccessToast />) : ""
            }
        </>
    );
}

export default AllTodos;