import { useSelector } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';

const Component = () => {

	const _ui = useSelector(state => state.ui);

	const _handlePreferredGender = (e) => {
		e.preventDefault();
		const preferredGender = document.querySelector(`input[name='preferredGender']:checked`).value;
		console.log(preferredGender);
	};

	return (
		<div className='section'>
			{_ui.lang === 'en_US' ?
				<span>Gender</span>
				:
				<span>성별</span>
			}
			<div className='radio_container'>
				<div className='radio_section'>
					<span>Male</span>
					<input type={'radio'} name='preferredGender' value='0' defaultChecked />
				</div>
				<div className='radio_section'>
					<span>Female</span>
					<input type={'radio'} name='preferredGender' value='1' />
				</div>
			</div>
			<BiCheckSquare className='check_btn' onClick={(e) => _handlePreferredGender(e)} />
		</div>
	);
};

export default Component;