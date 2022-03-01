import Axios from 'axios';

import {
	GOOGLE_ID,
	GOOGLE_SECRET,
	FACEBOOK_ID,
	FACEBOOK_SECRET,
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

export const requestFacebookCode = (code, cb) => {

	let url = `https://graph.facebook.com/v6.0/oauth/access_token`;

	const data = {
		client_id: FACEBOOK_ID,
		client_secret: FACEBOOK_SECRET,
		code,
		redirect_uri: `${APP_REDIRECT_URL}/facebook`
	};

	Axios.get(url, { params: data })
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

export const requestFacebookProfile = (token, cb) => {

	let url = `https://graph.facebook.com/v6.0/me?fields=email,first_name,last_name,picture`;

	Axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
		.then(res => {
			const user = res.data;
			cb({
				userName: user.email.split('@')[0],
				email: user.email,
				firstName: user.first_name,
				lastName: user.last_name,
				picture: user.picture.data.url,
				socialType: 'facebook'
			});
		})
		.catch(() => {
			cb(null);
		});

};

export const requestGithubCode = (code, cb) => {

	let url = '/login/oauth/access_token';

	const data = {
		client_id: GITHUB_ID,
		client_secret: GITHUB_SECRET,
		code,
		redirect_uri: `${APP_REDIRECT_URL}/github`
	};

	Axios.post(url, data)
		.then(res => {
			cb({
				token: new URLSearchParams(res.data).get('access_token')
			});
		})
		.catch(() => {
			cb({
				token: null
			});
		});

};

export const requestGithubProfile = (token, cb) => {

	let url = 'https://api.github.com/user';

	Axios.get(url, { headers: { Authorization: `token ${token}` } })
		.then(res => {
			const user = res.data;
			cb({
				userName: user.login,
				email: user.email,
				firstName: user.name,
				lastName: '',
				picture: user.avatar_url,
				socialType: 'github'
			});
		})
		.catch(() => {
			cb(null);
		});

};