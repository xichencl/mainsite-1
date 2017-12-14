import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends React.Component { 
  constructor(props){
    super(props);
  }
  
  render(){
  return (
    <div>
    	<div className="checklist-title">
    		<hr className="title-line" />
    		<h1>Checklist</h1>
    		<hr className="title-line" />
    	</div>
    	<div className="checklist">
  	    <Footer />
  	    <VisibleTodoList caseId={this.props.location.state.caseId}/>
  	  </div>
    </div>
  );
  }
}
export default App

//    <AddTodo />
