import Theme from './theme';
import Profile from './profile';

import './index.css';

const Component = () => {
	return (
		<div className='setting_container'>
			<div className='theme_container'>
				<Theme />
			</div>
			<div className='profile_container'>
				<Profile />
			</div>
		</div>
	);
};

export default Component;