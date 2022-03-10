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
	userId, email, firstName, lastName, picture, socialType, cb
) => {

	const url = '/api/user';
	const data = {
		userId: `${userId}-${Math.floor(Math.random() * 100000)}`,
		email,
		firstName,
		lastName,
		picture,
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
