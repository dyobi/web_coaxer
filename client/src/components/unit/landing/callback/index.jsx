import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import Alert from '../../alert';

import {
	checkEmail,
	postUser,
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
	const navigate = useNavigate();

	const [alertView, setAlertView] = useState(false);
	const [alertType, setAlertType] = useState('');
	const [alertEnDesc, setAlertEnDesc] = useState('');
	const [alertKrDesc, setAlertKrDesc] = useState('');
	const [alertCb1, setAlertCb1] = useState(() => () => null);
	const [alertCb2, setAlertCb2] = useState(() => () => null);

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
											postUser(
												user.userId,
												user.email,
												user.firstName,
												user.lastName,
												user.picture,
												user.socialType,
												res => {
													if (res.status === 400) {
														setAlertType('confirm');
														setAlertEnDesc('Something went wrong during the process. You will be taken to the main page.');
														setAlertKrDesc('알 수 없는 오류가 발생하였습니다. 확인을 누르시면 메인화면으로 이동합니다.');
														setAlertCb1(() => () => navigate('/home'));
														setAlertView(true);
													}
												}
											)
										}
										console.log('login');
									} else if (res.status === 412) {
										console.log('다른 플랫폼으로 가입이력있음, 계속진행?');
									} else {
										setAlertType('confirm');
										setAlertEnDesc('Something went wrong during the process. You will be taken to the main page.');
										setAlertKrDesc('알 수 없는 오류가 발생하였습니다. 확인을 누르시면 메인화면으로 이동합니다.');
										setAlertCb1(() => () => navigate('/home'));
										setAlertView(true);
									}
								});
							}
						});
					} else {
						setAlertType('confirm');
						setAlertEnDesc('Something went wrong during the process. You will be taken to the main page.');
						setAlertKrDesc('알 수 없는 오류가 발생하였습니다. 확인을 누르시면 메인화면으로 이동합니다.');
						setAlertCb1(() => () => navigate('/home'));
						setAlertView(true);
					}
				}
			});
		}

		return () => {
			isCancelled = true;
		};

	}, [location, source, navigate, alertView]);

	return (
		<div className='oauth_callback_container'>
			callback page!!!
			<Alert
				show={alertView}
				type={alertType}
				enDesc={alertEnDesc}
				krDesc={alertKrDesc}
				cb1={() => alertCb1()}
				cb2={() => alertCb2()}
			/>
		</div>
	);
};

export default Component;