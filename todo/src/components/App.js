import React from 'react'
import TodoList from './TodoList';
import TodoInput from './TodoInput';

const App = () => (
  <div>
      <h1>This is a Redux to-do list!</h1>
      <TodoList />
      <TodoInput />
  </div>
)

export default App;