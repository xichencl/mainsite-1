import { FETCH_ASSET } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_ASSET:
  	console.log('fetch asset reducer')
    return [ action.payload, ...state];
  default:
    return state;
  }
}