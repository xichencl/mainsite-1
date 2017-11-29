import axios from 'axios';
import Cookies from 'universal-cookie';
const cookie = new Cookies();
// import cookie from 'react-cookie';
import { logoutUser } from './auth';
import { STATIC_ERROR, FETCH_USER, FETCH_PAGE_DATA, LOAD_CHECKLIST, GET_ALL_TASKS, CHANGE_STATUS } from './types';
import { fetchData } from "../data/mockDataAPI";

// import siteData from "../data/smallClaimsData";

const SITE_DATA_PATH = '../data/cleanSiteData.json'
export const API_URL = 'http://localhost:3000/api'; // database server URL
export const CLIENT_ROOT_URL = 'http://localhost:8080';

//= ===============================
// Utility actions
//= ===============================
export function fetchUser(uid) {
  // console.log(uid)
  return function (dispatch) {

    const thisToken = cookie.get('token')
    axios.get(`${API_URL}/user/${uid}`, { 
      headers: { Authorization: thisToken }, 
    })
    .then((response) => {
      dispatch({
        type: FETCH_USER,
        payload: response.data.user,
      });
    })
    .catch((error) => dispatch(errorHandler(dispatch, error.response, errorType)));
  };
}


// load page data from local file
export function loadPageData() {  
  return dispatch => {
    axios.get('./smallClaimsData.json')
      .then(data => {
      console.log('action', data)
      dispatch({
          type : FETCH_PAGE_DATA,
          payload : data
      })
    })
  }
}


// todo component actions from todo redux basics tutorial
let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

///////////

// export const loadChecklist = () => dispatch => {
//   axios.get('./checklist_smallClaims.json')
//     .then((response) => {
//       console.log(response.data.smallClaims, 'checking first then response')
//       return response.data.smallClaims
//     })
//     .then((data) => {
//       dispatch({
//         type: LOAD_CHECKLIST,
//         payload: data
//       }); 
//     })
//   .catch((err) => {
//       console.error.bind(err);
//   })
// }

///////////

export function errorHandler(dispatch, error, type) {
  console.log('Error type: ', type);
  console.log(error);

  let errorMessage = error.response ? error.response.data : error;

   // NOT AUTHENTICATED ERROR
  if (error.status === 401 || error.response.status === 401) {
    errorMessage = 'You are not authorized to do this.';
    return dispatch(logoutUser(errorMessage));
  }

  dispatch({
    type,
    payload: errorMessage,
  });
}

// Post Request
export function postData(action, errorType, isAuthReq, url, dispatch, data) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.get('token') } };
  }

  axios.post(requestUrl, data, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}

// Get Request
export function getData(action, errorType, isAuthReq, url, dispatch) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.get('token') } };
  }

  axios.get(requestUrl, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}

// Put Request
export function putData(action, errorType, isAuthReq, url, dispatch, data) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.get('token') } };
  }

  axios.put(requestUrl, data, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}

// Delete Request
export function deleteData(action, errorType, isAuthReq, url, dispatch) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.get('token') } };
  }

  axios.delete(requestUrl, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}

//= ===============================
// Static Page actions
//= ===============================
export function sendContactForm({ name, emailAddress, message }) {
  return function (dispatch) {
    axios.post(`${API_URL}/communication/contact`, { name, emailAddress, message })
    .then((response) => {
      dispatch({
        type: SEND_CONTACT_FORM,
        payload: response.data.message,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, STATIC_ERROR);
    });
  };
}