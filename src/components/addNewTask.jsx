import React, { useState } from 'react';
// Redux hooks
import { useDispatch } from 'react-redux';
// Add new task action
import { addTodo } from '../redux/todo/todoActions';

const AddNewTask = () => {
    // Define new dispatch variable
    const dispatch = useDispatch();
    // Define a new state to add new task
    const [newTask, setNewTask] = useState("");
    // Method to activate add new task action
    const addNewTaskHandler = () => {
        dispatch(addTodo(newTask));
    }

    return (
        <>
            <div className="w-2/5 mx-auto mt-10">
                <div className="relative">
                    <input onChange={(event) => setNewTask(event.target.value)} type="text" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a new daily task" />
                    <button onClick={() => addNewTaskHandler()} className="text-white absolute right-2.5 bottom-2.5 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2">
                        Add task
                    </button>
                </div>
            </div>
        </>
    );
}

export default AddNewTask;