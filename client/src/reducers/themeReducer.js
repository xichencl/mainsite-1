// const themes = ['light', 'dark'];

module.exports = (state='light', action) => {
	switch (action.type) {
		case "TOGGLE_THEME":
			console.log(state);
			console.log("toggled theme!");
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