import { STORE_PARTY_ID } from '../actions/types';

// export default function(state = [], action) {
//   switch(action.type) {
//     case STORE_PARTY_ID:
//     	return { ...state, partyId: action.payload}
//    	default:
//     	return state;
//   }
// }


const partyId = (state=[], action) => {
	switch(action.type) {
		case 'STORE_PARTY_ID':
			return {
				id: action.id
			}
		default:
			return state
	}
}

// todo component actions from todo redux basics tutorial



export default partyId
