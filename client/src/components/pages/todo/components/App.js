import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
  	<h1 className="checklist-title">Checklist</h1>
  	<div className="checklist">
	    <Footer />
	    <VisibleTodoList />
	  </div>
  </div>
)

export default App

//    <AddTodo />
