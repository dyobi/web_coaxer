import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { deviceType, osName, osVersion, browserName, browserVersion } from 'react-device-detect';

import Alert from '../../alert';
import { user_data } from '../../../../store/actions';

import {
	checkEmail,
	getUser,
	postUser,
	putUserSocialType,
	postLog,

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
	const dispatch = useDispatch();
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

	const _handleLogin = (email) => {
		getUser(email, res => {
			if (res.status === 200) {
				const user = res.obj;
				const device = `${deviceType === '' ? 'PC' : deviceType.toUpperCase()}`;
				const info = `${osName} ${osVersion} - ${browserName} ${browserVersion}`;

				postLog(user.id, device, info, res => {
					if (res.status === 200) {
						dispatch(user_data({
							id: user.id,
							email: user.email,
							firstName: user.firstName,
							lastName: user.lastName,
							dateOfBirth: user.dateOfBirth,
							gender: user.gender,
							bio: user.bio,
							latitude: user.latitude,
							longitude: user.longitude,
							notification: user.notification,
							preferredGender: user.preferredGender,
							preferredMinAge: user.preferredMinAge,
							preferredMaxAge: user.preferredMaxAge,
							preferredMaxRange: user.preferredMaxRange,
							pictures: user.pictures
						}));
						navigate('/home');
					} else {
						_handleErrorAlert();
					}
				});
			} else {
				_handleErrorAlert();
			}
		});
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
									if (res.status === 200) {
										postUser(
											user.email,
											user.firstName,
											user.lastName,
											user.socialType,
											res => {
												if (res.status === 200) {
													_handleLogin(user.email);
												} else {
													_handleErrorAlert();
												}
											}
										);
									} else if (res.status === 411) {
										_handleLogin(user.email);
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
											_handleLogin(user.email);
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