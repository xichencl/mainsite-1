import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import SquareBox from '../template/square-box.js';
import SquareBoxStatic from '../template/square-box-static.js';
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
class AzurePortalView extends Component {

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
        
        <div key={`${5}search`}>
          
          <Link to='find-a-case'>
            <SquareBoxStatic
              boxTitle='Find a Court Case'
              imgSrc={SearchIcon} />
          </Link>
        </div>,
        // ============================
        <div key={`${4}logout`} className='Logout'>
          <a href='/api/logout'> Logout </a>
        </div>,
      ];
    } else {
      return [
        // Unauthenticated navigation
        <div key={1}>
          <Link to="login">
            <SquareBoxStatic
              boxTitle='Login / Sign Up'
              imgSrc={LoginIcon} />
          </Link>
        </div>,
        <div key={2}>
          <Link to="find-a-case">
            <SquareBoxStatic 
              boxTitle='Find a Case'
              imgSrc={SearchIcon} />
          </Link>
        </div>,
      ];
    }
  }

  render() {
    return  (
      !this.props.loading &&
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
    loading: state.loading
  };
}

export default connect(mapStateToProps, { fetchAzureUser })(AzurePortalView);