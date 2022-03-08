import { useSelector } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';

const Component = () => {

	const _ui = useSelector(state => state.ui);

	const _handleGender = (e) => {
		e.preventDefault();
		const gender = document.querySelector(`input[name='gender']:checked`).value;
		console.log(gender);
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
					{_ui.lang === 'en_US' ?
						<span>Male</span>
						:
						<span>남성</span>
					}
					<input type={'radio'} name='gender' value='0' defaultChecked />
				</div>
				<div className='radio_section'>
					{_ui.lang === 'en_US' ?
						<span>Female</span>
						:
						<span>여성</span>
					}
					<input type={'radio'} name='gender' value='1' />
				</div>
			</div>
			<BiCheckSquare className='check_btn' onClick={(e) => _handleGender(e)} />
		</div>
	);
};

export default Component;