import type { Filter } from '../types/actions'

interface VisibilityFilterAction {
  type: string;
  filter: Filter;
}

const visibilityFilter = (
  state: Filter = 'SHOW_ALL',
  action: VisibilityFilterAction
) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter