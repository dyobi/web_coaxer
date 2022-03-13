import { useSelector } from 'react-redux';

import Interceptor from '../../util/interceptor';

import './index.css';

const Component = () => {

	const _user = useSelector(state => state.user);

	return (
		<div className='overview_container'>
			{_user.id === -1 ?
				<Interceptor />
				:
				''
			}
		</div>
	);
};

export default Component;