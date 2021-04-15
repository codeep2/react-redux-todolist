import React, { useState } from "react"
import styles from '../assets/scss/todo.module.scss'
export interface TodoProps {
  id: number;
  completed: boolean;
  text: string;
  toggleTaskCompleted: () => {};
  editTodo: (id: number, text: string) => {};
  deleteTodo: () => {};
}

export const Todo = ({ id, completed, text, toggleTaskCompleted, editTodo, deleteTodo }: TodoProps) => {
  const [isEditing, setEdit] = useState(false)
  const [newTodo, setNewTodo] = useState('')

  const editTemplate = (
    <form
      onSubmit={e => {
        e.preventDefault()
        editTodo(id, newTodo)
        if (!newTodo.trim()) {
          deleteTodo()
        }
        setEdit(false)
        setNewTodo('')
      }}
    >
      <div className={styles.edit_wrap}>
        <label htmlFor="todo-edit">New name for <span>{text}</span></label>
        <input
          id="todo-edit"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <div className="btn_group">
        <button className="save_btn" type="submit">Save</button>
        <button className="delete_btn" onClick={() => setEdit(false)}>
          Cancel
        </button>
      </div>
    </form>
  )

  const viewTemplate = (
    <div>
      <div className={styles.checkbox_wrap}>
        <input
          id="todo"
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted()}
        />
        <label className={styles.todo_label} htmlFor="todo">
          {text}
        </label>
      </div>
      <div className="btn_group">
        <button className="edit_btn" onClick={() => setEdit(true)}>
          Edit
        </button>
        <button className="delete_btn" onClick={() => deleteTodo()}>Delete</button>
      </div>
    </div>
  )

  return (
    <li>
      {isEditing ? editTemplate : viewTemplate}
    </li>
  )
}
