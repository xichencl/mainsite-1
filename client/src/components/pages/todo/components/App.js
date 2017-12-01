import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
  	<div className="checklist-title">
  		<hr className="title-line" />
  		<h1>Checklist</h1>
  		<hr className="title-line" />
  	</div>
  	<div className="checklist">
	    <Footer />
	    <VisibleTodoList />
	  </div>
  </div>
)

export default App

//    <AddTodo />
