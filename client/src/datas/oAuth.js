import Axios from 'axios';

import {
	GOOGLE_ID,
	GOOGLE_SECRET,
	GITHUB_ID,
	GITHUB_SECRET,
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

export const requestGoogleProfile = (token, cb) => {

	let url = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json';

	Axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
		.then(res => {
			const user = res.data;

			cb({
				userName: user.email.split('@')[0],
				password: '',
				email: user.email,
				firstName: user.given_name,
				lastName: user.family_name,
				picture: user.picture,
				socialType: 'google'
			});
		})
		.catch(() => {
			cb(null);
		});

};

export const requestGithubCode = (code, cb) => {

	let url = 'https://github.com/login/oauth/access_token';
	const data = {
		// grant_type: 'authorization_code',
		client_id: GITHUB_ID,
		client_secret: GITHUB_SECRET,
		code,
		redirect_uri: `${APP_REDIRECT_URL}/github`
	};

	Axios.post(url, data, {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
		}
	})
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