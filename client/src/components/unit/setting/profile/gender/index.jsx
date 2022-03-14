import { useSelector, useDispatch } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';

import { putUserGender } from '../../../../../datas';
import { user_gender } from '../../../../../store/actions';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const _handleGender = (e) => {
		e.preventDefault();

		const gender = document.querySelector(`input[name='gender']:checked`).value;

		putUserGender(_user.email, gender, res => {
			if (res.status === 200) {
				dispatch(user_gender(Boolean(gender)));
			} else {
				console.log('error handle');
			}
		});
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
			<BiCheckSquare className='check_btn' onClick={(e) => _handleGender(e)} />
		</div>
	);
};

export default Component;