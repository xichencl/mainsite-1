/*
this state captures strictly user input
*/
const defaultState = [];

// const sessionId = uuidv1();
module.exports = (state = defaultState, action) => {
	switch (action.type){
		case 'USER_INPUT': {
			const newState = state.slice();
			newState.push(action.payload);
			return newState;
		}
	
	}
	return state;

}