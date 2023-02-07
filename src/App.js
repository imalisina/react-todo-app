import React from 'react';

// All views
import TodoAppHeader from './components/todoAppHeader';
import AllTodos from './components/allTodos';

const App = () => {
  return (
    <>
      <TodoAppHeader />
      <AllTodos />
    </>
  );
}

export default App;