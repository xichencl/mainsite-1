import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
  	<h1>Checklist</h1>
    <Footer />
    <VisibleTodoList />
  </div>
)

export default App

//    <AddTodo />
