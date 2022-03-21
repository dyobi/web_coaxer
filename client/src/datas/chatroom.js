import Axios from 'axios';

/* ----------------------------------------------------- */

/*
	method: 
		GET
	url: 
		/api/chatroom
	parameter: 
		id
	result:
		status:
			200: success
			400: failure
		obj:
			chatroom list
	using at:
		Chat
*/
export const getChatroom = (id, cb) => {

	const url = '/api/chatroom';
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