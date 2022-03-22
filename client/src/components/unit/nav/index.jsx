import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import cookie from 'react-cookies';

import WideView from './wideView';
import NarrowView from './narrowView';
import Alert from '../alert';

import { ui_lang } from '../../../store/actions';
import { user_data, user_chat } from '../../../store/actions';

import './index.css';

const Component = () => {

	const mounted = useRef(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const _ui = useSelector(state => state.ui);

	const [width, setWidth] = useState(window.innerWidth);
	const [alertView, setAlertView] = useState(false);

	const _handleLogout = () => {
		dispatch(user_data({
			id: -1,
			email: '',
			firstName: '',
			lastName: '',
			dateOfBirth: '',
			gender: 0,
			bio: '',
			latitude: 0,
			longitude: 0,
			notification: 1,
			preferredGender: 0,
			preferredMinAge: 0,
			preferredMaxAge: 100,
			preferredMaxRange: 310,
			pictures: {},
			isComplete: false
		}));
		dispatch(user_chat({}));
		navigate('/home');
	};

	const _handleLang = () => {
		cookie.save('lang', _ui.lang === 'en_US' ? 'ko_KR' : 'en_US', {
			path: '/'
		});
		dispatch(ui_lang(_ui.lang === 'en_US' ? 'ko_KR' : 'en_US'));
	};

	$(window).on('resize', () => {
		if (mounted.current) {
			setWidth(window.innerWidth);
		}
	});

	useEffect(() => {
		mounted.current = true;

		return () => {
			mounted.current = false;
		};
	}, []);

	return (
		<>
			{width > 700 ?
				<WideView
					setAlertView={setAlertView}
					_handleLang={_handleLang}
				/>
				:
				<NarrowView
					setAlertView={setAlertView}
					_handleLang={_handleLang}
				/>
			}
			<Alert
				show={alertView}
				setShow={() => setAlertView()}
				type={'question'}
				enDesc={'Did you have fun at Coaxer? Are you sure to log out?'}
				krDesc={'콕서에서 재미있는 시간 보내셨나요? 확인을 누르시면 로그아웃 됩니다.'}
				cb1={() => _handleLogout()}
				cb2={() => null}
			/>
		</>
	);
};

export default Component;