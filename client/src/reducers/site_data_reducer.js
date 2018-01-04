// import { FETCH_PAGE_DATA, ERROR_RESPONSE } from '../actions/types';
import { FETCH_SITE_CONTENT } from '../actions/types';


const INITIAL_STATE = { all: [] };
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_SITE_CONTENT:
  	console.log('reducer firing')
    return { ...state, all: action.payload.data.items };
  default:
    return state;
  }
}


