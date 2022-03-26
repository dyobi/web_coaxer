import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Submit from '../button';
import ErrorAlert from '../../../../util/errorAlert';

import { putUserGender } from '../../../../../datas';
import { user_gender } from '../../../../../store/actions';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const [alertView, setAlertView] = useState(false);
	const dispatch = useDispatch();

	const _handleGender = (e) => {
		e.preventDefault();

		const gender = document.querySelector(`input[name='gender']:checked`).value;

		putUserGender(_user.email, gender, res => {
			if (res.status === 200) {
				dispatch(user_gender(Boolean(gender)));
			} else {
				setAlertView(!alertView);
			}
		});
	};

	return (
		<>
			<div className='section'>
				{_ui.lang === 'en_US' ?
					<span>Gender</span>
					:
					<span>성별</span>
				}
				<div className='radio_container'>
					<div className='radio_section'>
						{_ui.lang === 'en_US' ?
							<span>Male</span>
							:
							<span>남성</span>
						}
						<input type={'radio'} name='gender' value={false} defaultChecked={!_user.gender ? true : false} />
					</div>
					<div className='radio_section'>
						{_ui.lang === 'en_US' ?
							<span>Female</span>
							:
							<span>여성</span>
						}
						<input type={'radio'} name='gender' value={true} defaultChecked={_user.gender ? true : false} />
					</div>
				</div>
				<Submit onClick={(e) => _handleGender(e)} />
			</div>
			<ErrorAlert alertView={alertView} setAlertView={() => setAlertView()} />
		</>
	);
};

export default Component;