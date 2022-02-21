import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import cookie from 'react-cookies';
import { BiHomeHeart, BiBarChartSquare, BiMap, BiMessageRoundedDots, BiCog } from 'react-icons/bi';

import { ui_lang } from '../../../store/actions';
import ko_KR from '../../../assets/icons/ko_KR.png';
import en_US from '../../../assets/icons/en_US.png';

import './index.css';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const [width, setWidth] = useState(window.innerWidth);
	const dispatch = useDispatch();

	$(window).on('resize', () => {
		setWidth(window.innerWidth);
	});

	const _handleLang = () => {
		cookie.save('lang', _ui.lang === 'en_US' ? 'ko_KR' : 'en_US', {
			path: '/'
		});
		dispatch(ui_lang(_ui.lang === 'en_US' ? 'ko_KR' : 'en_US'));
	};

	return (
		<div>
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
						<Link to='/home' style={{textDecoration: 'none'}}><div className='nav_menu'>{_ui.lang === 'en_US' ? 'Home' : '홈'}</div></Link>
						<Link to='/overview' style={{textDecoration: 'none'}}><div className='nav_menu'>{_ui.lang === 'en_US' ? 'Overview' : '차트'}</div></Link>
						<Link to='/lookup' style={{textDecoration: 'none'}}><div className='nav_menu'>{_ui.lang === 'en_US' ? 'LookUp' : '찾기'}</div></Link>
						<Link to='/chat' style={{textDecoration: 'none'}}><div className='nav_menu'>{_ui.lang === 'en_US' ? 'Chat' : '채팅'}</div></Link>
						<Link to='/setting' style={{textDecoration: 'none'}}><div className='nav_menu'>{_ui.lang === 'en_US' ? 'Setting' : '설정'}</div></Link>
				</div>
				</div>
			}
		</div >
	);
}

export default Component;