import { FETCH_USER, ERROR_RESPONSE, GET_DATA, PUT_DATA, POST_DATA, UPDATE_CASE } from '../actions/types';
import deepcopy from 'deepcopy';

const INITIAL_STATE = { profile: {}, cases: [], message: '', error: '' };

export default function (state = INITIAL_STATE, action) {
  // console.log("ACTION: ", action);
  switch (action.type) {
    case FETCH_USER:
      // const newCases = state.cases.slice();
      // newCases.push(...action.payload.cases);

      return { ...state, profile: action.payload.profile, cases: action.payload.cases };
    // case GET_DATA:
    //   let newCases = state.cases.slice();
    //   newCases = newCases.concat(action.payload.cases);
    //   // console.log("state updated ", newCases);
      
    //   return { ...state, cases: newCases};
    // case PUT_DATA:
    //   return { ...state, cases: action.payload};
    case UPDATE_CASE:
      return { ...state, cases: action.payload }; 
    case ERROR_RESPONSE:
      return { ...state, error: action.payload };
  }

  return state;
}


/* 

switch (action.type) {
    case FETCH_USER:
      return { ...state, profile: action.payload.user };

*/