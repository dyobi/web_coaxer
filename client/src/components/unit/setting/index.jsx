import { useSelector } from 'react-redux';

import Theme from './theme';
import Profile from './profile';

import './index.css';

const Component = () => {

	const _ui = useSelector(state => state.ui);

	return (
		<div className='setting_container'>
			<div className='theme_container'>
				<Theme />
			</div>
			<div className='profile_container'>
				<div className='profile_container_title'>
					{_ui.lang === 'en_US' ?
						'Profile Settings'
						:
						'프로필 설정'
					}
				</div>
				<div className='profile_settings'>
					<Profile />
				</div>
			</div>
		</div>
	);
};

export default Component;