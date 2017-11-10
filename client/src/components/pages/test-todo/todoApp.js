import React from 'react'
import TodoFooter from './todoFooter'
import AddTodo from './containers/addTodo'
import VisibleTodoList from './containers/visibleTodoList'

const todoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <TodoFooter />
  </div>
)

export default todoApp