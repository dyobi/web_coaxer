import Axios from 'axios';

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
		Hookup
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