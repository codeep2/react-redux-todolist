import React, { useState } from "react"

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
        setEdit(false)
        setNewTodo('')
      }}
    >
      <div>
        <label htmlFor="todo-edit">New name for {text}</label>
        <input
          id="todo-edit"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Save</button>
        <button onClick={() => setEdit(false)}>
          Cancel
        </button>
      </div>
    </form>
  )

  const viewTemplate = (
    <div>
      <div>
        <input
          id="todo"
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted()}
        />
        <label htmlFor="todo">
          {text}
        </label>
      </div>
      <div>
        <button onClick={() => setEdit(true)}>
          Edit
        </button>
        <button onClick={() => deleteTodo()}>Delete</button>
      </div>
    </div>
  )

  return (
    <li>
      {isEditing ? editTemplate : viewTemplate}
    </li>
  )
}
