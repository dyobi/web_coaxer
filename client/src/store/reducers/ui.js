const data = {
	lang: 'en_US',
	color: '#F44336'
};

const Reducer = (state = data, action) => {
	switch (action.type) {
		case 'UI_COLOR':
			return Object.assign({}, state, {
                color: action.payload
            });
		case 'UI_LANG':
			return Object.assign({}, state, {
				lang: action.payload
			});
		default:
			return state;
	};
};

export default Reducer;