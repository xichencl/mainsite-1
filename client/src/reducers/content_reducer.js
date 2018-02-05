// import { FETCH_PAGE_DATA, ERROR_RESPONSE } from '../actions/types';
import { FETCH_SITE_CONTENT } from '../actions/types';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_SITE_CONTENT:
  	console.log('fetch site content reducer')
    return { ...state, all: action.payload.data.items };
  default:
    return state;
  }
}
