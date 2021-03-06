import React from 'react'
import { Todo } from './Todo'
import type { ToDoItemType } from '../types/todos'
import styles from '../assets/scss/todoList.module.scss'

interface TodoListProps {
  todos: ToDoItemType[];
  visible: string;
  editTodo: (id: number, text: string) => {};
  toggleTodo: (id: number) => {};
  deleteTodo: (id: number) => {};
}

const TodoList = ({ todos, visible, editTodo, toggleTodo, deleteTodo }: TodoListProps) => (
  <ul>
    <h2 className={styles.list_head}>{todos.length} tasks {visible}</h2>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        editTodo={(id: number, text: string) => editTodo(id, text)}
        toggleTaskCompleted={() => toggleTodo(todo.id)}
        deleteTodo={() => deleteTodo(todo.id)}
      />
    ))}
  </ul>
)

export default TodoList
