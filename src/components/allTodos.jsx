import React, { useEffect, useState } from 'react';
// Redux hooks
import { useDispatch, useSelector } from 'react-redux';
// Todo actions
import { fetchTodos } from '../redux/todo/todoActions';

const AllTodos = () => {
    // Define the dispatch
    const dispatch = useDispatch();
    // Define a variable to get requested data from reducer
    const todos = useSelector((state) => state.allTodos.todos);
    // Activate fetch todos request
    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <dl className="mt-20 mx-auto max-w-md text-gray-300 divide-y divide-gray-500">
            {
                todos == []
                    ? todos.map((todo, index) => {
                        return (
                            <div key={index} className="flex flex-row justify-between pb-3">
                                <dd className="text-lg">{todo.title}</dd>
                                <a href="">Done</a>
                            </div>
                        );
                    })
                    : <h1 className='text-white'>Loading . . .</h1>
            }
        </dl>
    );
}

export default AllTodos;
