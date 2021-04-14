import type { ToDoItemType, ToDoActionType } from '../types/todos'

const todos = (
  state: ToDoItemType[] = [],
  action: ToDoActionType
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ]
    case 'EDIT_TODO':
      return state.map((todo) => (
        todo.id === action.id
          ? { ...todo, text: action.text }
          : todo
      ))
    case 'DELETE_TODO':
      return state.filter((todo) => {
        return todo.id !== action.id
      })
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

export default todos
