import request from 'superagent'

const dataService = store => next => action => {
	next(action)
	switch (action.type) {
	case 'GET_TODO_DATA':
		request
			.get('data/checklist_smallClaims.json')
			.end((err, res) => {
				if (err) {
					return next({
						type: 'GET_TODO_DATA_ERROR',
						err
					})
				}
				const data = JSON.parse(res.text)
				next({
					type: 'LOAD_TODOS',
					data
				})
			})
		break
	default:
		break
	}

};

export default dataService