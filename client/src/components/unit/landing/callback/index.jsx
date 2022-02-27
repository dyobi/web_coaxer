import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import { requestGoogleCode, requestGoogleProfile, requestGithubCode } from '../../../../datas';

import '../index.css';
import Axios from 'axios'
const Component = () => {

	const { source } = useParams();
	const location = useLocation().search;

	const _ui = useSelector(state => state.ui);

	useEffect(() => {
		if (location !== undefined) {
			const code = new URLSearchParams(location).get('code');
			let codeFunc;

			if (source === 'google') codeFunc = requestGoogleCode;
			// else if (source === 'facebook') codeFunc = requestFacebookCode;
			else if (source === 'github') codeFunc = requestGithubCode;

			// codeFunc(code, res => {
			// 	const token = res.token;
			// 	if (token !== null) {
			// 		console.log(token)
			// 		// let profileFunc = requestGoogleProfile;
			// 		// profileFunc(token, res => {
			// 		// 	console.log(res)
			// 		// })
			// 	}
			// })

			Axios.get('http://localhost:8081/api', res => {
				console.log(res)
			})
		}
	}, [location, source]);

	return (
		<div className='oauth_callback_container'>
			callback page!!!
		</div>
	);
};

export default Component;