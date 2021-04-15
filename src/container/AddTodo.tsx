import React, { useRef } from 'react'
import { Dispatch } from 'redux'
import { connect, useDispatch } from 'react-redux'
import { addTodo } from '../actions'
import styles from '../assets/scss/addTodo.module.scss'

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
      <h2 className={styles.label_wrap}>
        <label htmlFor="new-todo-input">What needs to be done?</label>
      </h2>
      <div className="wrapper">
        <input id="new-todo-input" ref={inputRef}></input>
        <button className="add_btn" type="submit">Add</button>
      </div>
    </form>
  )
}

export default connect()(AddTodo)
