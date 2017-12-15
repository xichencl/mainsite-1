import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { connect } from 'react-redux'
import { getData } from '../../../../actions/index.js'

class App extends React.Component { 
  constructor(props){
    super(props);
  }

  // ComponentWillMount(){
  //   console.log("get date called on component mount");
  //   this.props.onUpdate();
  // }
  
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

export default App;
// export default connect(null, mapDispatchToProps )(App);

//    <AddTodo />
