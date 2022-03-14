import { useSelector, useDispatch } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';

import { putUserPreferredGender } from '../../../../../datas';
import { user_p_gender } from '../../../../../store/actions';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const _handlePreferredGender = (e) => {
		e.preventDefault();

		const preferredGender = document.querySelector(`input[name='preferredGender']:checked`).value;

		putUserPreferredGender(_user.email, preferredGender, res => {
			if (res.status === 200) {
				dispatch(user_p_gender(Boolean(preferredGender)));
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
					<input type={'radio'} name='preferredGender' value={false} defaultChecked={!_user.preferredGender ? true : false} />
				</div>
				<div className='radio_section'>
					{_ui.lang === 'en_US' ?
						<span>Female</span>
						:
						<span>여성</span>
					}
					<input type={'radio'} name='preferredGender' value={true} defaultChecked={_user.preferredGender ? true : false} />
				</div>
			</div>
			<BiCheckSquare className='check_btn' onClick={(e) => _handlePreferredGender(e)} />
		</div>
	);
};

export default Component;