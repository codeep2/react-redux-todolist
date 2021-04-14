import React from 'react';
import AddTodo from './container/AddTodo'
import Filter from './components/Filter'
import VisibleTodoList from './container/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <Filter />
    <VisibleTodoList />
  </div>
)

export default App
