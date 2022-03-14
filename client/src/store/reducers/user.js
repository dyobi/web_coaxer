const data = {
	id: -1,
	userId: '',
	email: '',
	firstName: '',
	lastName: '',
	dateOfBirth: '',
	gender: 0,
	bio: '',
	latitude: 0.0,
	longitude: 0.0,
	notification: 1,
	preferredGender: 0,
	preferredMinAge: 0,
	preferredMaxAge: 100,
	preferredMaxRange: 310,
	pictures: {},
	isComplete: false
};

const Reducer = (state = data, action) => {
	switch (action.type) {
		case 'USER_DATA':
			return Object.assign({}, state, {
				id: action.payload.id,
				userId: action.payload.userId,
				email: action.payload.email,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				dateOfBirth: action.payload.dateOfBirth,
				gender: action.payload.gender,
				bio: action.payload.bio,
				latitude: action.payload.latitude,
				longitude: action.payload.longitude,
				notification: action.payload.notification,
				preferredGender: action.payload.preferredGender,
				preferredMinAge: action.payload.preferredMinAge,
				preferredMaxAge: action.payload.preferredMaxAge,
				preferredMaxRange: action.payload.preferredMaxRange,
				pictures: action.payload.pictures
			});
		case 'USER_FIRSTNAME':
			return Object.assign({}, state, {
				firstName: action.payload
			});
		case 'USER_LASTNAME':
			return Object.assign({}, state, {
				lastName: action.payload
			});
		case 'USER_DOB':
			return Object.assign({}, state, {
				dateOfBirth: action.payload
			});
		case 'USER_GENDER':
			return Object.assign({}, state, {
				gender: action.payload
			});
		case 'USER_BIO':
			return Object.assign({}, state, {
				bio: action.payload
			});
		case 'USER_LATITUDE':
			return Object.assign({}, state, {
				latitude: action.payload
			});
		case 'USER_LONGITUDE':
			return Object.assign({}, state, {
				longitude: action.payload
			});
		case 'USER_NOTIFICATION':
			return Object.assign({}, state, {
				notification: action.payload
			});
		case 'USER_P_GENDER':
			return Object.assign({}, state, {
				preferredGender: action.payload
			});
		case 'USER_P_MINAGE':
			return Object.assign({}, state, {
				preferredMinAge: action.payload
			});
		case 'USER_P_MAXAGE':
			return Object.assign({}, state, {
				preferredMaxAge: action.payload
			});
		case 'USER_P_MAXRANGE':
			return Object.assign({}, state, {
				preferredMaxRange: action.payload
			});
		case 'USER_PICTURES':
			return Object.assign({}, state, {
				pictures: action.payload
			});
		case 'USER_ISCOMPLETE':
			return Object.assign({}, state, {
				pictures: action.payload
			});
		default:
			return state;
	};
};

export default Reducer;