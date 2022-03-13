import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import Alert from '../../alert';

import {
	checkEmail,
	postUser,
	putUserSocialType,
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

	const _handleErrorAlert = () => {
		setAlertType('confirm');
		setAlertEnDesc('Something went wrong during the process. You will be taken to the main page.');
		setAlertKrDesc('알 수 없는 오류가 발생하였습니다. 확인을 누르시면 메인화면으로 이동합니다.');
		setAlertCb1(() => () => navigate('/home'));
		setAlertView(true);
	};

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
														_handleErrorAlert();
													}
												}
											)
										}
										// LOG-IN START
										console.log('login');
										// LOG-IN END
										navigate('/home');
									} else if (res.status === 412) {
										setAlertType('question');
										setAlertEnDesc(`Your email is already in use on ${res.obj.toUpperCase()}. Do you want to proceed on ${source.toUpperCase()}? All the user datas will be remained.`);
										setAlertKrDesc(`이메일이 ${res.obj.toUpperCase()} 에서 이미 사용 중 입니다. ${source.toUpperCase()} 으로 로그인을 진행 하시겠습니까? 사용자 정보는 유지됩니다.`);
										setAlertCb1(() => () => {
											putUserSocialType(user.email, source, res => {
												if (res.status === 400) {
													_handleErrorAlert();
												}
											});
											// LOG-IN START
											console.log('login');
											// LOG-IN END
											navigate('/home');
										});
										setAlertCb2(() => () => navigate('/home'));
										setAlertView(true);
									} else {
										_handleErrorAlert();
									}
								});
							}
						});
					} else {
						_handleErrorAlert();
					}
				}
			});
		}

		return () => {
			isCancelled = true;
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location, source, navigate]);

	window.history.forward();

	return (
		<div className='oauth_callback_container'>
			<>
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
			</>
			<Alert
				show={alertView}
				setShow={() => setAlertView()}
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