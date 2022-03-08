import { useSelector } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';

export const LastName = () => {

	const _ui = useSelector(state => state.ui);

	const _handleLastName = (e) => {
		e.preventDefault();
		const lastName = document.getElementById('lastName').value;
		console.log(lastName);
	};

	return (
		<div className='section'>
			{_ui.lang === 'en_US' ?
				<span>Last Name</span>
				:
				<span>성</span>
			}
			<input id='lastName' type={'text'} className='input_name' />
			<BiCheckSquare className='check_btn' onClick={(e) => _handleLastName(e)} />
		</div>
	);
};

export const FirstName = () => {

	const _ui = useSelector(state => state.ui);

	const _handleFirstName = (e) => {
		e.preventDefault();
		const firstName = document.getElementById('firstName').value;
		console.log(firstName);
	};

	return (
		<div className='section'>
			{_ui.lang === 'en_US' ?
				<span>First Name</span>
				:
				<span>이름</span>
			}
			<input id='firstName' type={'text'} className='input_name' />
			<BiCheckSquare className='check_btn' onClick={(e) => _handleFirstName(e)} />
		</div>
	);
};