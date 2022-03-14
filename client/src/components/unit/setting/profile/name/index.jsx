import { useSelector, useDispatch } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';

import { putUserLastName, putUserFirstName } from '../../../../../datas';
import { user_lastName, user_firstName } from '../../../../../store/actions';

export const LastName = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const _handleLastName = (e) => {
		e.preventDefault();

		const lastName = document.getElementById('lastName').value;

		putUserLastName(_user.email, lastName, res => {
			if (res.status === 200) {
				dispatch(user_lastName(lastName));
			}
		});
	};

	return (
		<div className='section'>
			{_ui.lang === 'en_US' ?
				<span>Last Name</span>
				:
				<span>성</span>
			}
			<input id='lastName' type={'text'} className='input_name' defaultValue={_user.lastName} />
			<BiCheckSquare className='check_btn' onClick={(e) => _handleLastName(e)} />
		</div>
	);
};

export const FirstName = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const _handleFirstName = (e) => {
		e.preventDefault();

		const firstName = document.getElementById('firstName').value;

		putUserFirstName(_user.email, firstName, res => {
			if (res.status === 200) {
				dispatch(user_firstName(firstName));
			}
		})
	};

	return (
		<div className='section'>
			{_ui.lang === 'en_US' ?
				<span>First Name</span>
				:
				<span>이름</span>
			}
			<input id='firstName' type={'text'} className='input_name' defaultValue={_user.firstName} />
			<BiCheckSquare className='check_btn' onClick={(e) => _handleFirstName(e)} />
		</div>
	);
};