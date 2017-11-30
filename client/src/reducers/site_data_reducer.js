import { FETCH_PAGE_DATA, ERROR_RESPONSE } from '../actions/types';
import siteData from '../data/smallClaimsData.json'

const INITIAL_STATE = { 
	page: {},  
	error: '' 
};

// const INITIAL_STATE = siteData;

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PAGE_DATA:
      return { ...state, page: action.payload };
    case ERROR_RESPONSE:
      return { ...state, error: action.payload };
  }

  return state;
}


// export default function(state = [], action) {
//   switch (action.type) {
//     case FETCH_PAGE_DATA:
//     console.log(action)
//       return [ action.payload.data, ...state ]
//     }
//    return state;
//   }