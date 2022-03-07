import { BiCheckSquare } from 'react-icons/bi';

import { Year, Month } from '../util';

import './index.css';

const Component = () => {

	const _handleLastName = (e) => {
		e.preventDefault();
	};

	const _handleFirstName = (e) => {
		e.preventDefault();
	};

	const _handleDOB = (e) => {
		e.preventDefault();
		const birthYear = document.getElementById('birth_year').value;
		const birthMonth = document.getElementById('birth_month').value;
		console.log(birthYear + '  /  ' + birthMonth);
	};

	return (
		<div className='profile_setting_container'>
			<div className='section'>
				<span>Last Name</span>
				<input id='lastName' type={'text'} className='input_name' />
				<BiCheckSquare className='check_btn' onClick={(e) => _handleLastName(e)} />
			</div>
			<div className='section'>
				<span>First Name</span>
				<input id='firstName' type={'text'} className='input_name' />
				<BiCheckSquare className='check_btn' onClick={(e) => _handleFirstName(e)} />
			</div>
			<div className='section'>
				<span>Date of Birth</span>
				<select id='birth_year'>
					<Year />
				</select>
				<select id='birth_month'>
					<Month />
				</select>
				<BiCheckSquare className='check_btn' onClick={(e) => _handleDOB(e)} />
			</div>
		</div>
	);
};

export default Component;