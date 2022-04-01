import Axios from 'axios';

/* ----------------------------------------------------- */

/*
	method: 
		GET
	url: 
		/api/log
	parameter: 
		id
	result:
		status:
			200: success
			400: failure
		obj:
			Log list
	using at:
		Overview
*/
export const getLog = (id, cb) => {

	const url = '/api/log';
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
		/api/log
	parameter: 
		id, deviceType, info
	result:
		status:
			200: success
			400: failure
	using at:
		Overview
*/
export const postLog = (id, deviceType, info, cb) => {

	const url = '/api/log';
	const data = {
		id,
		deviceType,
		info
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