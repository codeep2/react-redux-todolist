import React from 'react';
import AddTodo from './container/AddTodo'
import Filter from './components/Filter'
import VisibleTodoList from './container/VisibleTodoList'
import './assets/scss/app.scss'

const App = () => (
  <div className="todoapp">
    <AddTodo />
    <Filter />
    <VisibleTodoList />
  </div>
)

export default App
