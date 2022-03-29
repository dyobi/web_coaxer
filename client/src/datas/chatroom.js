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

/*
	method: 
		DELETE
	url: 
		/api/message
	parameter: 
		id
	result:
		status:
			200: success
			400: failure
	using at:
		Chat
*/
export const deleteMessage = (id, chatroomId, cb) => {

	const url = '/api/message';
	const data = {
		id,
		chatroomId
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