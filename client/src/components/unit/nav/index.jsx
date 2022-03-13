import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import cookie from 'react-cookies';
import { BiHomeHeart, BiBarChartSquare, BiMap, BiMessageRoundedDots, BiCog, BiLogOutCircle } from 'react-icons/bi';

import Alert from '../alert';
import { ui_lang } from '../../../store/actions';
import { user_data } from '../../../store/actions';

import ko_KR from '../../../assets/icons/ko_KR.png';
import en_US from '../../../assets/icons/en_US.png';

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
			userId: '',
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
			preferredMaxDistance: 310
		}));
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
				// Window.innerWidth > 700px
				<div className='nav_maxwidth_container'>
					<Link to='/home' className='nav_icon_container'
						title={_ui.lang === 'en_US' ? 'Home' : '홈'}
					>
						<BiHomeHeart className='nav_icon' />
					</Link>
					<Link to='/overview' className='nav_icon_container'
						title={_ui.lang === 'en_US' ? 'Overview' : '차트'}
					>
						<BiBarChartSquare className='nav_icon' />
					</Link>
					<Link to='./lookup' className='nav_icon_container'
						title={_ui.lang === 'en_US' ? 'LookUp' : '찾기'}
					>
						<BiMap className='nav_icon' />
					</Link>
					<Link to='/chat' className='nav_icon_container'
						title={_ui.lang === 'en_US' ? 'Chat' : '채팅'}
					>
						<BiMessageRoundedDots className='nav_icon' />
					</Link>
					<Link to='setting' className='nav_icon_container'
						title={_ui.lang === 'en_US' ? 'Setting' : '설정'}
					>
						<BiCog className='nav_icon' />
					</Link>
					<div className='nav_icon_container'
						title={_ui.lang === 'en_US' ? 'LogOut' : '로그아웃'}
						onClick={() => setAlertView(true)}
					>
						<BiLogOutCircle className='nav_icon' />
					</div>
					<div className='nav_icon_container'
						onClick={() => _handleLang()}
					>
						<div
							className='lang_icon'
							style={{
								backgroundImage: `url('${_ui.lang === 'en_US' ? en_US : ko_KR}')`
							}}
							title={_ui.lang === 'en_US' ? 'English' : '한국어'}
						/>
					</div>
				</div>
				:
				// Window.innerWidth <= 700px
				<div className='nav_minwidth_container'>
					<div className='nav_header_top_container'>
						<div className='nav_header_title'>Coaxer</div>
						<div className='nav_icon_container'>
							<div
								className='lang_icon'
								style={{
									backgroundImage: `url('${_ui.lang === 'en_US' ? en_US : ko_KR}')`
								}}
								title={_ui.lang === 'en_US' ? 'English' : '한국어'}
								onClick={() => _handleLang()}
							/>
						</div>
					</div>
					<div className='nav_header_btm_container'>
						<Link to='/home' style={{ textDecoration: 'none' }}><div className='nav_menu'>{_ui.lang === 'en_US' ? 'Home' : '홈'}</div></Link>
						<Link to='/overview' style={{ textDecoration: 'none' }}><div className='nav_menu'>{_ui.lang === 'en_US' ? 'Overview' : '차트'}</div></Link>
						<Link to='/lookup' style={{ textDecoration: 'none' }}><div className='nav_menu'>{_ui.lang === 'en_US' ? 'LookUp' : '찾기'}</div></Link>
						<Link to='/chat' style={{ textDecoration: 'none' }}><div className='nav_menu'>{_ui.lang === 'en_US' ? 'Chat' : '채팅'}</div></Link>
						<Link to='/setting' style={{ textDecoration: 'none' }}><div className='nav_menu'>{_ui.lang === 'en_US' ? 'Setting' : '설정'}</div></Link>
					</div>
				</div>
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
}

export default Component;