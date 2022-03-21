import Axios from 'axios';

/* ----------------------------------------------------- */

/*
	method: 
		POST
	url: 
		/api/message
	parameter: 
		chatroom_id, user_id, content
	result:
		status:
			200: success
			400: failure
	using at:
		Message
*/
export const postMessage = (chatroom_id, user_id, content, cb) => {

	const url = '/api/message';
	const data = {
		chatroom_id,
		user_id,
		content
	};

	Axios.post(url, { params: data })
		.then(res => {
			cb(res.data);
		})
		.catch(() => {
			cb({ status: 400 });
		});
};

/* ----------------------------------------------------- */