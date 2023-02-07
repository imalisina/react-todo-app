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
    // Define the dispatch
    const dispatch = useDispatch();
    // Define a variable to get requested data from reducer
    const todos = useSelector((state) => state.allTodos.todos);
    // Activate fetch todos request
    useEffect(() => {
        dispatch(fetchTodos());
        setTimeout(() => setIsLoading(false), 1500);
    }, [todos]);
    // Define a method to trigger remove todo action and display a success toast
    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id));
        setTimeout(() => setIsVisible(true), 1500);
        setTimeout(() => setIsVisible(false), 3000);
    }

    return (
        <>
            <dl className="mt-10 mx-auto max-w-md text-gray-600 divide-y divide-gray-300">
                {
                    !isLoading
                        ? todos.map((todo, index) => {
                            return (
                                <div key={index} className="py-4 flex flex-row justify-between">
                                    <dd className="text-lg">{todo.title}</dd>
                                    {
                                        todo.description != null ? (<dd className='text-sm'>{todo.description}</dd>) : ""
                                    }
                                    <a onClick={() => removeTodoHandler(todo.id)}>Done</a>
                                </div>
                            );
                        })
                        : <LoadingPlaceholder />
                }
            </dl>
            {
                !isVisible ? (<SuccessToast />) : ""
            }
        </>
    );
}

export default AllTodos;