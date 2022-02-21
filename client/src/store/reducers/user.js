const data = {
	data: {}
};

const Reducer = (state = data, action) => {
	switch (action.type) {
		case 'USER_DATA':
			return Object.assign({}, state, {
				data: action.payload
			});
		default:
			return state;
	};
};

export default Reducer;