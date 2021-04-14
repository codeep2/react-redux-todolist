import React, { useRef } from 'react'
import { Dispatch } from 'redux'
import { connect, useDispatch } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={e => {
      e.preventDefault()
      // 如果输入的全是空字符，则返回
      if (inputRef.current && !inputRef.current.value.trim()) return

      if (inputRef.current) {
        dispatch(addTodo(inputRef.current.value))
        inputRef.current.value = ''
      }
    }}>
      <h2>
        <label htmlFor="new-todo-input">What needs to be done?</label>
      </h2>
      <input id="new-todo-input" ref={inputRef}></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default connect()(AddTodo)
