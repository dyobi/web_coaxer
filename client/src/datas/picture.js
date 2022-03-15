import Axios from 'axios';

/* ----------------------------------------------------- */

/*
	method: 
		GET
	url: 
		/api/picture
	parameter: 
		id
	result:
		status:
			200: success
			400: failure
		obj:
			picture list
	using at:
		Picture
*/
export const getPicture = (id, cb) => {

	const url = '/api/picture';
	const data = {
		id
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
		/api/picture
	parameter: 
		id, picture
	result:
		status:
			200: success
			400: failure
	using at:
		Picture
*/
export const postPicture = (formData, cb) => {

	const url = '/api/picture';

	Axios.post(url, formData)
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */