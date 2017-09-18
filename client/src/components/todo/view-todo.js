import React, { Component } from 'react';
import Cookies from 'universal-cookie';
const cookie = new Cookies();
import { Link } from 'react-router-dom';
// import cookie from 'react-cookie';
import { connect } from 'react-redux';

class ViewTodo extends Component {
  componentWillMount() {
    // Fetch user data prior to component mounting

  }

  render() {
    return (
      <div>
      	<div className='Box Todo-box col-2'>
      	
      		
      		<h3>To Do List <i className="fa fa-check" aria-hidden="true"></i></h3>
      		<ul>
      			<li><del>File a claim</del></li>
      			<li><span>Serve the defendant(s)</span></li>
      			<li><span>Prepare for court</span></li>
      		</ul>
      	</div>
      	
      </div>
    );
  }
}

// function mapStateToProps(state) {
// 	console.log(state.user)
//   return {
//     profile: state.user.profile,
//   };
// }

// export default connect(mapStateToProps, { fetchUser })(ViewProfile);
export default ViewTodo;

// add {todoListItems} to <ul></ul>