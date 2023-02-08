import React from 'react';

// All views
import TodoAppHeader from './components/todoAppHeader';
import AddNewTask from './components/addNewTask';
import AllTodos from './components/allTodos';

const App = () => {
  return (
    <>
      <TodoAppHeader />
      <AddNewTask />
      <AllTodos />
    </>
  );
}

export default App;