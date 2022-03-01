import Axios from 'axios';

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
		userId,
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
