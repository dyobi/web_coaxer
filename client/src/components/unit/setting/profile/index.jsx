import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LastName, FirstName } from './name';
import Gender from './gender';
import DOB from './dob';
import Notification from './notification';
import Bio from './bio';
import Picture from './picture';
import PreferredGender from './preferredGender';
import PreferredAgeRange from './preferredAgeRange';
import PreferredMaxRange from './preferredMaxRange';
import DisableAccount from './disable';

import { user_isComplete } from '../../../../store/actions';

import './index.css';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (
			_user.lastName === '' || _user.lastName === null ||
			_user.firstName === '' || _user.firstName === null ||
			_user.dateOfBirth === '' || _user.dateOfBirth === null ||
			_user.bio === '' || _user.bio === null ||
			_user.pictures.length === 0
		) {
			dispatch(user_isComplete(false));
		} else {
			dispatch(user_isComplete(true));
		}
	}, [dispatch, _user.lastName, _user.firstName, _user.dateOfBirth, _user.bio, _user.pictures.length]);

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
				<PreferredAgeRange />
				<PreferredMaxRange />
			</>

			{/* TITLE : Danger Zone */}
			<>
				<div className='section_title'>
					{_ui.lang === 'en_US' ?
						<span>Danger Zone</span>
						:
						<span>위험 지역</span>
					}
				</div>
				<DisableAccount />
			</>

		</div>
	);
};

export default Component;