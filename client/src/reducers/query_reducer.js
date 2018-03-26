const query = (state = '', action) => {
	switch (action.type){
		case 'STORE_QUERY':
			return action.query;
		default:
			return state;
	}

}

export default query;