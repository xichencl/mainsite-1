const defaultState = [];

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