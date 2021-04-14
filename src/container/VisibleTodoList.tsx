import TodoList from '../components/TodoList'
import type { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { toggleTodo, editTodo, deleteTodo } from '../actions'
import type { RootState } from '../types/store'


const getVisibleTodoList = (
  { todos, visibilityFilter }: RootState
) => {
  switch (visibilityFilter) {
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => !todo.completed)
    default:
      return todos
  }
}

const getVisible = (filter: RootState['visibilityFilter']) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return 'completed'
    case 'SHOW_ACTIVE':
      return 'active'
    default:
      return 'all'
  }
}

const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodoList(state),
  visible: getVisible(state.visibilityFilter),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  editTodo: (id: number, text: string) => dispatch(editTodo(id, text)),
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
  deleteTodo: (id: number) => dispatch(deleteTodo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
