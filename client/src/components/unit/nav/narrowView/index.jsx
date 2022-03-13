import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ko_KR from '../../../../assets/icons/ko_KR.png';
import en_US from '../../../../assets/icons/en_US.png';

import '../index.css';

const Component = ({ setAlertView, _handleLang }) => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);

	return (
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
				{_user.id !== -1 ?
					<div className='nav_menu' onClick={() => setAlertView(true)}>
						{_ui.lang === 'en_US' ? 'Logout' : '로그아웃'}
					</div>
					:
					''
				}
			</div>
		</div>
	);
};

export default Component;