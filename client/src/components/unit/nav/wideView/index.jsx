import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiHomeHeart, BiBarChartSquare, BiMap, BiMessageRoundedDots, BiCog, BiLogOutCircle } from 'react-icons/bi';

import ko_KR from '../../../../assets/icons/ko_KR.png';
import en_US from '../../../../assets/icons/en_US.png';

import '../index.css';

const Component = ({ setAlertView, _handleLang }) => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);

	return (
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
			{_user.id !== -1 ?
				<div className='nav_icon_container'
					title={_ui.lang === 'en_US' ? 'Log-out' : '로그아웃'}
					onClick={() => setAlertView(true)}
				>
					<BiLogOutCircle className='nav_icon' />
				</div>
				:
				''
			}
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
	);
};

export default Component;