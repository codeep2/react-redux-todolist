import type { Filter } from '../types/actions'

let nextTodoId = 0
export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const editTodo = (id: number, text: string) => ({
  type: 'EDIT_TODO',
  id,
  text
})

export const deleteTodo = (id: number) => ({
  type: 'DELETE_TODO',
  id
})

export const setVisibilityFilter = (filter: Filter) => ({
  type: 'SET_FILTER',
  filter
})

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  id
})

