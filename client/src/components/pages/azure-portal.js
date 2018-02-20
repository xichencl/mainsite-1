import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SquareBox from '../template/square-box.js';
import ViewProfile from '../profile/view-profile';
import Upcoming from '../calendar/upcoming';
import MyForms from './FormsBoxes/my-forms';
import MyCases from '../cases/my-cases';
// import ViewTodo from '../todo/view-todo';
import { API_URL, fetchUser, fetchAzureUser } from '../../actions/index';
// import axios from 'axios';
// import Cookies from 'universal-cookie';
// const cookie = new Cookies();

import SearchIcon from '../../img/icn_search.svg';
import LoginIcon from '../../img/icn_login.svg';
import Cookies from 'universal-cookie';
const cookie = new Cookies();
import AzurePortalView from './azure-portal-view';

class AzurePortal extends Component {
  componentWillMount() {
    // Fetch user data prior to component mounting
    this.props.fetchAzureUser();
    
  }

  render() {
    return (
    <div>
    { (!this.props.loading) ?   <AzurePortalView /> : 'loading...' }
    </div>
    )
  }
}




function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    loading: state.loading
  };
}

export default connect(mapStateToProps, { fetchAzureUser })(AzurePortal);







// import React, { Component } from 'react';
// import SquareBox from '../template/square-box';
// import { Link } from 'react-router-dom';
// import profile from '../../../img/profile.svg';
// import search from '../../../img/search.svg';

// export default class PortalNoAuth extends Component {
//  render() {
//    return (
//      <div className='PortalNoAuth'>
//        <h1>My Portal</h1>
//            <Link to='/login'>
//              <SquareBox boxTitle='Log in / Sign up'
//                   imgSrc=''
//              />
//            </Link>
//            <Link to='/profile'>
//              <SquareBox boxTitle='Find a Court Case'
//                   imgSrc=''
//              />
//            </Link>
//        </div>
//    )
//  }
// }

// taking out "upcoming" box for now
{/*<div key={`${4}upcoming`}>
          <Upcoming />
        </div>,
        // ============================*/}