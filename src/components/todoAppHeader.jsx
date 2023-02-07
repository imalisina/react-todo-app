import React from 'react';

const TodoAppHeader = () => {
    return (
        <div className="pt-10 mt-10 w-100 text-center justify-center">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-100 md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-red-400">Todo App </span>
                Front End</h1>
            <p className="text-lg font-normal text-gray-400 lg:text-xl">
                Powered by Laravel API !
            </p>
        </div>
    );
}

export default TodoAppHeader;