import { useSelector } from 'react-redux';

import { LastName, FirstName } from './name';
import Gender from './gender';
import DOB from './dob';
import Notification from './notification';
import Bio from './bio';
import Picture from './picture';
import PreferredGender from './preferredGender';

import './index.css';

const Component = () => {

	const _ui = useSelector(state => state.ui);

	return (
		<div className='profile_setting_container'>

			{/* TITLE : User Information */}
			<>
				<div className='section_title'>
					{_ui.lang === 'en_US' ?
						<span>Basic Information</span>
						:
						<span>기본 정보</span>
					}
				</div>
				<LastName />
				<FirstName />
				<DOB />
				<Gender />
				<Notification />
				<Bio />
				<Picture />
			</>

			{/* TITLE : Ideal Partner Preferences */}
			<>
				<div className='section_title'>
					{_ui.lang === 'en_US' ?
						<span>Ideal Partner Preferences</span>
						:
						<span>나의 반쪽은 ?</span>
					}
				</div>
				<PreferredGender />
			</>

		</div>
	);
};

export default Component;