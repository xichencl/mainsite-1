


const visibilityReducer = (state=false, action) => {
	switch (action.type) {
		case "TOGGLE_BOT":
			// console.log(state);
			// console.log("toggled visibility!");
			return !state;
		

		default:
			return state;
		


	}

}

const themeReducer = (state='light', action) => {
	switch (action.type) {
		case "TOGGLE_THEME":
			// console.log(state);
			// console.log("toggled theme!");
			if (state === 'light'){
				return 'dark';
			}
			if (state === 'dark'){
				return 'light';
			}
		

		default:
			return state;
		


	}

}

module.exports = {themeReducer, visibilityReducer};
