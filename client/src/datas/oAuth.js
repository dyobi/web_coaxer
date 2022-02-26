import Axios from 'axios';

import {
	GOOGLE_ID,
	GOOGLE_SECRET,
	APP_REDIRECT_URL
} from '../constants';

export const requestGoogleCode = (code, cb) => {

	let url = 'https://oauth2.googleapis.com/token';
	const data = {
		grant_type: 'authorization_code',
		client_id: GOOGLE_ID,
		client_secret: GOOGLE_SECRET,
		code,
		redirect_uri: `${APP_REDIRECT_URL}/google`
	};

	Axios.post(url, data)
		.then(res => {
			cb({
				token: res.data.access_token
			});
		})
		.catch(() => {
			cb({
				token: null
			});
		});

};