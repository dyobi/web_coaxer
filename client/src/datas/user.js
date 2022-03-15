import Axios from 'axios';

/* ----------------------------------------------------- */

/*
	method: 
		GET
	url: 
		/api/user/checkEmail
	parameter: 
		email, socialType
	result:
		status:
			200: absence
			400: error
			411: existence & same social type
			412: existence & different social type
		obj:
			socialType (only when 412 occurs)
	using at:
		User
*/
export const checkEmail = (email, socialType, cb) => {

	const url = '/api/user/checkEmail';
	const data = {
		email,
		socialType
	};

	Axios.get(url, { params: data })
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */

/*
	method: 
		GET
	url: 
		/api/user
	parameter: 
		email
	result:
		status:
			200: success
			400: failure
		obj:
			user
	using at:
		User
*/
export const getUser = (email, cb) => {

	const url = '/api/user';
	const data = {
		email
	};

	Axios.get(url, { params: data })
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */

/*
	method: 
		POST
	url: 
		/api/user/
	parameter: 
		userId, email, firstName, lastName, picture, socialType
	result:
		status:
			200 : success
			400 : failure
	using at:
		User
*/
export const postUser = (
	userId, email, firstName, lastName, socialType, cb
) => {

	const url = '/api/user';
	const data = {
		userId: `${userId}-${Math.floor(Math.random() * 100000)}`,
		email,
		firstName,
		lastName,
		socialType
	};

	Axios.post(url, data)
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});

};

/* ----------------------------------------------------- */

/*
	method: 
		PUT
	url: 
		/api/user/firstName
	parameter: 
		email, firstName
	result:
		status:
			200 : success
			400 : failure
	using at:
		User
*/
export const putUserLastName = (email, lastName, cb) => {

	const url = '/api/user/lastName';
	const data = {
		email,
		lastName
	};

	Axios.put(url, data)
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */

/*
	method: 
		PUT
	url: 
		/api/user/firstName
	parameter: 
		email, firstName
	result:
		status:
			200 : success
			400 : failure
	using at:
		User
*/
export const putUserFirstName = (email, firstName, cb) => {

	const url = '/api/user/firstName';
	const data = {
		email,
		firstName
	};

	Axios.put(url, data)
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */

/*
	method: 
		PUT
	url: 
		/api/user/dob
	parameter: 
		email, dob
	result:
		status:
			200 : success
			400 : failure
	using at:
		User
*/
export const putUserDob = (email, dob, cb) => {

	const url = '/api/user/dob';
	const data = {
		email: email,
		dateOfBirth: dob
	};

	Axios.put(url, data)
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */

/*
	method: 
		PUT
	url: 
		/api/user/gender
	parameter: 
		email, gender
	result:
		status:
			200 : success
			400 : failure
	using at:
		User
*/
export const putUserGender = (email, gender, cb) => {

	const url = '/api/user/gender';
	const data = {
		email,
		gender
	};

	Axios.put(url, data)
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */

/*
	method: 
		PUT
	url: 
		/api/user/bio
	parameter: 
		email, bio
	result:
		status:
			200 : success
			400 : failure
	using at:
		User
*/
export const putUserBio = (email, bio, cb) => {

	const url = '/api/user/bio';
	const data = {
		email,
		bio
	};

	Axios.put(url, data)
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */

/*
	method: 
		PUT
	url: 
		/api/user/notification
	parameter: 
		email, notification
	result:
		status:
			200 : success
			400 : failure
	using at:
		User
*/
export const putUserNotification = (email, notification, cb) => {

	const url = '/api/user/notification';
	const data = {
		email,
		notification
	};

	Axios.put(url, data)
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */

/*
	method: 
		PUT
	url: 
		/api/user/preferredGender
	parameter: 
		email, preferredGender
	result:
		status:
			200 : success
			400 : failure
	using at:
		User
*/
export const putUserPreferredGender = (email, preferredGender, cb) => {

	const url = '/api/user/preferredGender';
	const data = {
		email,
		preferredGender
	};

	Axios.put(url, data)
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */

/*
	method: 
		PUT
	url: 
		/api/user/preferredAgeRange
	parameter: 
		email, preferredMinAge, preferredMaxAge
	result:
		status:
			200 : success
			400 : failure
	using at:
		User
*/
export const putUserPreferredAgeRange = (email, preferredMinAge, preferredMaxAge, cb) => {

	const url = '/api/user/preferredAgeRange';
	const data = {
		email,
		preferredMinAge,
		preferredMaxAge
	};

	Axios.put(url, data)
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */

/*
	method: 
		PUT
	url: 
		/api/user/preferredMaxRange
	parameter: 
		email, preferredMaxRange
	result:
		status:
			200 : success
			400 : failure
	using at:
		User
*/
export const putUserPreferredMaxRange = (email, preferredMaxRange, cb) => {

	const url = '/api/user/preferredMaxRange';
	const data = {
		email,
		preferredMaxRange
	};

	Axios.put(url, data)
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */

/*
	method: 
		PUT
	url: 
		/api/user/socialType
	parameter: 
		email, socialType
	result:
		status:
			200 : success
			400 : failure
	using at:
		User
*/
export const putUserSocialType = (email, socialType, cb) => {

	const url = `/api/user/socialType`;
	const data = {
		email,
		socialType
	};

	Axios.put(url, data)
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */


/*
	method: 
		DELETE
	url: 
		/api/user/
	parameter: 
		email
	result:
		status:
			200 : success
			400 : failure
	using at:
		User
*/
export const deleteUser = (email, cb) => {

	const url = '/api/user';
	const data = {
		email
	};

	Axios.delete(url, { params: data })
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});

};

/* ----------------------------------------------------- */