import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SquareBox from '../template/square-box.js';
import ViewProfile from '../profile/view-profile';
import ViewTodo from '../todo/view-todo';
// import Profile from '../profile/profile';

class Portal extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [

        <div key={`${1}profile`}>
        	
            <ViewProfile />

        </div>,
        <div key={`${2}portal`}>
          
            <ViewTodo />
          
        </div>,
        <div key={`${3}search`}>
          
          <Link to="find-a-case">
            <SquareBox
              boxTitle='Find a Court Case'
              iconClass='fa fa-search' />
          </Link>

        </div>,
        <div key={`${4}logout`} className="Logout">
          <Link to="logout">Logout</Link>
        </div>,
      ];
    } else {
      return [
        // Unauthenticated navigation
        <div key={1}>
          <Link to="login">
            <SquareBox 
              boxTitle='Login / Sign Up'
              iconClass='fa fa-user' />
          </Link>
        </div>,
        <div key={2}>
          <Link to="find-a-case">
            <SquareBox 
              boxTitle='Find a Case'
              iconClass='fa fa-search' />
          </Link>
        </div>,
      ];
    }
  }

  render() {
    return (
      <div>
        <div className="portal grid grid-pad">
          <h1>My Portal</h1>
            {this.renderLinks()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(Portal);







// import React, { Component } from 'react';
// import SquareBox from '../template/square-box';
// import { Link } from 'react-router-dom';
// import profile from '../../../img/profile.svg';
// import search from '../../../img/search.svg';

// export default class PortalNoAuth extends Component {
// 	render() {
// 		return (
// 			<div className='PortalNoAuth'>
// 				<h1>My Portal</h1>
// 		        <Link to='/login'>
// 		          <SquareBox boxTitle='Log in / Sign up'
// 		               imgSrc=''
// 		          />
// 		        </Link>
// 		        <Link to='/profile'>
// 		          <SquareBox boxTitle='Find a Court Case'
// 		               imgSrc=''
// 		          />
// 		        </Link>
// 		    </div>
// 		)
// 	}
// }