const loading = (state = true, action) => {
	switch (action.type) {
	case 'GET_TODO_DATA':
		return true
	case 'GET_TODO_DATA_RECEIVED':
		return false
	case 'GET_TODO_DATA_ERROR':
		return false
	case 'FETCH_USER_RECEIVED':
		return false	
	default:
		return state
	}
}

export default loading