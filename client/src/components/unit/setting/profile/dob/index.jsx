import { useSelector } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';

import { Year, Month, Date } from '../util';

const Component = () => {

	const _ui = useSelector(state => state.ui);

	const _handleDOB = (e) => {
		e.preventDefault();
		const birthYear = document.getElementById('birth_year').value;
		const birthMonth = document.getElementById('birth_month').value;
		const birthDate = document.getElementById('birth_date').value;
		console.log(birthYear + '  /  ' + birthMonth + '  /  ' + birthDate);
	};

	return (
		<div className='section'>
			{_ui.lang === 'en_US' ?
				<span>Date of Birth</span>
				:
				<span>생년월일</span>
			}
			<select id='birth_year' defaultValue='default'>
				<Year />
			</select>
			<select id='birth_month' defaultValue='default'>
				<Month />
			</select>
			<select id='birth_date' defaultValue='default'>
				<Date />
			</select>
			<BiCheckSquare className='check_btn' onClick={(e) => _handleDOB(e)} />
		</div>
	);
};

export default Component;