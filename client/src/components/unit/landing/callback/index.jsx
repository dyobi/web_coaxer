import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import {
	checkEmail,

	requestGoogleToken,
	requestGoogleProfile,
	requestFacebookToken,
	requestFacebookProfile,
	requestGithubToken,
	requestGithubProfile
} from '../../../../datas';

import '../index.css';

const Component = () => {

	const { source } = useParams();
	const location = useLocation().search;

	// const _ui = useSelector(state => state.ui);

	useEffect(() => {

		if (location !== undefined) {

			const code = new URLSearchParams(location).get('code');
			let codeFunc;
			let profileFunc;

			if (source === 'google') {
				codeFunc = requestGoogleToken;
				profileFunc = requestGoogleProfile;
			} else if (source === 'facebook') {
				codeFunc = requestFacebookToken;
				profileFunc = requestFacebookProfile;
			} else if (source === 'github') {
				codeFunc = requestGithubToken;
				profileFunc = requestGithubProfile;
			}

			codeFunc(code, res => {
				const token = res.token;
				if (token !== null) {
					profileFunc(token, res => {
						const user = res;
						checkEmail(user.email, user.socialType, res => {

						});
					});
				}
			});
		}
		
	}, [location, source]);

	return (
		<div className='oauth_callback_container'>
			callback page!!!
		</div>
	);
};

export default Component;