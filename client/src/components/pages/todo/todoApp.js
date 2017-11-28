import React from 'react'
import TodoFooter from './todoFooter'
import AddTodo from './containers/addTodo'
import VisibleTodoList from './containers/visibleTodoList'
import VisibleTaskList from './containers/visibleTodoList'

import LoadTodo from './containers/loadTodo'

const TodoApp = () => (
  <div>
    <AddTodo />
    <LoadTodo />
    <VisibleTodoList />
    <VisibleTaskList />
    <TodoFooter />
  </div>
)

export default TodoApp
