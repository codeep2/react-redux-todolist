import React from 'react'
import FilterLink from '../container/FilterLink'

const Filter = () => (
  <div className="wrapper">
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </div>
)

export default Filter