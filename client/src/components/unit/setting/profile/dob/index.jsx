import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Submit from '../button';
import ErrorAlert from '../../../../util/errorAlert';

import { putUserDob } from '../../../../../datas';
import { Year, Month, Date } from '../util';
import { user_dob } from '../../../../../store/actions';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const [alertView, setAlertView] = useState(false);
	const dispatch = useDispatch();

	const _handleDOB = (e) => {
		e.preventDefault();

		const year = document.getElementById('birth_year').value;
		const month = document.getElementById('birth_month').value;
		const date = document.getElementById('birth_date').value;

		if (year === 'default' || month === 'default' || date === 'default') {
			console.log('handle error');
		} else {
			const dob = new window.Date(Number(year), Number(month) - 1, Number(date)).toISOString();

			putUserDob(_user.email, dob, res => {
				if (res.status === 200) {
					dispatch(user_dob(year + '-' + month + '-' + date));
				} else {
					setAlertView(!alertView);
				}
			});
		}
	};

	return (
		<>
			<div className='section'>
				{_ui.lang === 'en_US' ?
					<span>Date of Birth</span>
					:
					<span>생년월일</span>
				}
				<select id='birth_year' defaultValue={_user.dateOfBirth !== null ? _user.dateOfBirth.slice(0, 4) : 'default'}>
					<Year />
				</select>
				<select id='birth_month' defaultValue={_user.dateOfBirth !== null ? _user.dateOfBirth.slice(5, 7) : 'default'}>
					<Month />
				</select>
				<select id='birth_date' defaultValue={_user.dateOfBirth !== null ? _user.dateOfBirth.slice(8, 10) : 'default'}>
					<Date />
				</select>
				<Submit onClick={(e) => _handleDOB(e)} />
			</div>
			<ErrorAlert alertView={alertView} setAlertView={() => setAlertView()} />
		</>
	);
};

export default Component;