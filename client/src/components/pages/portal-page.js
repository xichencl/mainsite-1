import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SquareBox from '../template/square-box.js';
import ViewProfile from '../profile/view-profile';
import Upcoming from '../calendar/upcoming';
import MyForms from './FormsBoxes/my-forms';
import MyCases from '../cases/my-cases';
// import ViewTodo from '../todo/view-todo';
import { API_URL, fetchUser } from '../../actions/index';
// import axios from 'axios';
// import Cookies from 'universal-cookie';
// const cookie = new Cookies();

import SearchIcon from '../../img/search.svg';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

class Portal extends Component {
  componentWillMount() {
    // Fetch user data prior to component mounting
    if (this.props.authenticated){
      const user = cookie.get('user');
      const uid = user._id;
      this.props.fetchUser(uid);
    }
  }

  renderLinks() {
    if (this.props.authenticated) {
      // console.log("Props:", this.props);
      // const user = cookie.get('user');
      // const uid = user._id;
      // this.props.fetchUser(uid);
      // fetchUser(cookie.get('user')._id);
      // console.log(cookie.get('token'));
      // axios.get(`${API_URL}/user/${cookie.get('user')._id}`, {headers: {'Authorization': `${cookie.get('token')}`}})
      // .then((response)=>{
      //   console.log(response.data);
      //   data = response.data;
      // })
      // .catch((error)=>{
      //   console.log(error);
      // });
      return [

        <div key={`${1}profile`}>
          <ViewProfile />
        </div>,
        // ============================
        <div key={`${2}cases`}>
          <MyCases />
        </div>,
        // ============================
        <div key={`${3}forms`}>
          <MyForms />
        </div>,
        // ============================
        <div key={`${4}upcoming`}>
          <Upcoming />
        </div>,
        // ============================
        <div key={`${5}search`}>
          
          <Link to='find-a-case'>
            <SquareBox
              boxTitle='Find a Court Case'
              imgSrc={SearchIcon} />
          </Link>
        </div>,
        // ============================
        <div key={`${4}logout`} className='Logout'>
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
              imgSrc={SearchIcon} />
          </Link>
        </div>,
      ];
    }
  }

  render() {
    return (
      <div>
        <h1>My Portal</h1>
        <div className='grid grid-pad'>
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

export default connect(mapStateToProps, { fetchUser })(Portal);







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