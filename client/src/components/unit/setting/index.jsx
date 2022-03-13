import { useSelector } from 'react-redux';

import Theme from './theme';
import Profile from './profile';
import Interceptor from '../../util/interceptor';

import './index.css';

const Component = () => {

	const _user = useSelector(state => state.user);

	return (
		<div className='setting_container'>
			<div className='theme_container'>
				<Theme />
			</div>
			{_user.id === -1 ?
				<div className='setting_interceptor_container'>
					<Interceptor />
				</div>
				:
				<div className='profile_container'>
					<Profile />
				</div>
			}
		</div>
	);
};

export default Component;