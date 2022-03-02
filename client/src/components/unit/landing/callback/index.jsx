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

		let isCancelled = false;

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
				if (!isCancelled) {
					if (token !== null) {
						profileFunc(token, res => {
							const user = res;
							if (!isCancelled) {
								checkEmail(user.email, user.socialType, res => {
									if (res.status === 200 || res.status === 411) {
										if (res.status === 200) {
											console.log('put user');
										}
										console.log('login');
									} else if (res.status === 412) {
										console.log('다른 플랫폼으로 가입이력있음, 계속진행?');
									} else {
										console.log('잘못된 접근입니다');
									}
								});
							}
						});
					} else {
						console.log('잘못된 접근입니다');
					}
				}
			});
		}

		return () => {
			isCancelled = true;
		};

	}, [location, source]);

	return (
		<div className='oauth_callback_container'>
			callback page!!!
		</div>
	);
};

export default Component;