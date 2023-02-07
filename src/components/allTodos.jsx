import React, { useEffect, useState } from 'react';
// Redux hooks
import { useDispatch, useSelector } from 'react-redux';
// Todo actions
import { fetchTodos } from '../redux/todo/todoActions';

// Loading placeholder
import LoadingPlaceholder from './loadingPlaceholder';

const AllTodos = () => {
    // Difine a spinner status
    const [isLoading, setIsLoading] = useState(true);
    // Define the dispatch
    const dispatch = useDispatch();
    // Define a variable to get requested data from reducer
    const todos = useSelector((state) => state.allTodos.todos);
    // Activate fetch todos request
    useEffect(() => {
        dispatch(fetchTodos());
        setTimeout(() => setIsLoading(false), 1500);
    }, []);

    return (
        <dl className="mt-20 mx-auto max-w-md text-gray-600 divide-y divide-gray-300">
            {
                !isLoading
                    ? todos.map((todo, index) => {
                        return (
                            <div key={index} className="py-4 flex flex-row justify-between">
                                <dd className="text-lg">{todo.title}</dd>
                                <a href="">Done</a>
                            </div>
                        );
                    })
                    : <LoadingPlaceholder />
            }
        </dl>
    );
}

export default AllTodos;
