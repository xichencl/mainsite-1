import React from 'react'
import { connect } from 'react-redux'
import { loadChecklist } from '../../../../actions'

let LoadTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(loadChecklist())
        }}>
        <button type="submit">
          Load Checklist
        </button>
      </form>
    </div>
  )
}
LoadTodo = connect()(LoadTodo)

export default LoadTodo