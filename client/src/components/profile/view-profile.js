import React, { Component } from 'react';
import Cookies from 'universal-cookie';
const cookie = new Cookies();
import { Link } from 'react-router-dom';
// import cookie from 'react-cookie';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/index';

import UserInfo from './user-info';

class ViewProfile extends Component {
  componentWillMount() {
    // Fetch user data prior to component mounting
    const user = cookie.get('user');
    const uid = user._id;
    this.props.fetchUser(uid);
  }

  render() {
    return (
      <div>
      	<div className='Box Profile-box col-2'>

      		
      		<h3>{this.props.profile.firstName} {this.props.profile.lastName} <Link to="profile"><i className="fa fa-pencil" aria-hidden="true"></i></Link></h3>

      		<p>{this.props.profile.email}</p>
      	</div>
      	
      </div>
    );
  }
}

function mapStateToProps(state) {
	console.log(state.user)
  return {
    profile: state.user.profile,
  };
}

export default connect(mapStateToProps, { fetchUser })(ViewProfile);

/* <UserInfo firstName={this.props.profile.firstName} /> */