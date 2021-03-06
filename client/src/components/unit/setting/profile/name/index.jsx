import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Submit from '../button';
import ErrorAlert from '../../../../util/errorAlert';

import { putUserLastName, putUserFirstName } from '../../../../../datas';
import { user_lastName, user_firstName } from '../../../../../store/actions';

export const LastName = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const [alertView, setAlertView] = useState(false);
	const dispatch = useDispatch();

	const _handleLastName = (e) => {
		e.preventDefault();

		const lastName = document.getElementById('lastName').value;
		const _blank = /^\s+|\s+$/g;

		if (lastName.replace(_blank, '') !== '' && lastName.length <= 15) {
			putUserLastName(_user.email, lastName, res => {
				if (res.status === 200) {
					dispatch(user_lastName(lastName));
				} else {
					setAlertView(!alertView);
				}
			});
		} else {
			setAlertView(!alertView);
		}
	};

	return (
		<>
			<div className='section'>
				{_ui.lang === 'en_US' ?
					<span>Last Name</span>
					:
					<span>성</span>
				}
				<input
					id='lastName'
					type={'text'}
					className='input_name'
					defaultValue={_user.lastName}
					maxLength={15}
				/>
				<Submit onClick={(e) => _handleLastName(e)} />
			</div>
			<ErrorAlert alertView={alertView} setAlertView={() => setAlertView()} />
		</>
	);
};

export const FirstName = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const [alertView, setAlertView] = useState(false);
	const dispatch = useDispatch();

	const _handleFirstName = (e) => {
		e.preventDefault();

		const firstName = document.getElementById('firstName').value;
		const _blank = /^\s+|\s+$/g;

		if (firstName.replace(_blank, '') !== '' && firstName.length <= 15) {
			putUserFirstName(_user.email, firstName, res => {
				if (res.status === 200) {
					dispatch(user_firstName(firstName));
				} else {
					setAlertView(!alertView);
				}
			});
		} else {
			setAlertView(!alertView);
		}
	};

	return (
		<>
			<div className='section'>
				{_ui.lang === 'en_US' ?
					<span>First Name</span>
					:
					<span>이름</span>
				}
				<input
					id='firstName'
					type={'text'}
					className='input_name'
					defaultValue={_user.firstName}
					maxLength={15}
				/>
				<Submit onClick={(e) => _handleFirstName(e)} />
			</div>
			<ErrorAlert alertView={alertView} setAlertView={() => setAlertView()} />
		</>
	);
};