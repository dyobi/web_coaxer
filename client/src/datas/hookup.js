import Axios from 'axios';

/* ----------------------------------------------------- */

/*
	method: 
		GET
	url: 
		/api/hookup
	parameter: 
		id
	result:
		status:
			200: success
			400: failure
		obj:
			fromMe, fromOther, matched (user list)
	using at:
		Overview
*/
export const getHookupOverview = (id, cb) => {

	const url = '/api/hookup';
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
		/api/hookup
	parameter: 
		from_id, to_id
	result:
		status:
			200: success
			400: failure
	using at:
		Lookup
*/
export const postHookup = (from, to, cb) => {

	const url = '/api/hookup';
	const data = {
		from,
		to
	};

	Axios.post(url, {}, { params: data })
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */