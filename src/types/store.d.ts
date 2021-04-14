import ToDoItemType from './todos'
import { Filter } from '../types/actions'

export interface RootState {
  todos: ToDoItemType[];
  visibilityFilter: Filter;
}