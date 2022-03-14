import { useSelector, useDispatch } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';

import { putUserNotification } from '../../../../../datas';
import { user_notification } from '../../../../../store/actions';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const _handleNotification = (e) => {
		e.preventDefault();

		const notification = document.querySelector(`input[name='notification']:checked`).value;

		putUserNotification(_user.email, notification, res => {
			if (res.status === 200) {
				dispatch(user_notification(Boolean(notification)));
			} else {
				console.log('handle error');
			}
		});
	};

	return (
		<div className='section'>
			{_ui.lang === 'en_US' ?
				<span>Notification</span>
				:
				<span>알림</span>
			}
			<div className='radio_container'>
				<div className='radio_section'>
					{_ui.lang === 'en_US' ?
						<span>On</span>
						:
						<span>켜짐</span>
					}
					<input type={'radio'} name='notification' value={true} defaultChecked={_user.notification ? true : false} />
				</div>
				<div className='radio_section'>
					{_ui.lang === 'en_US' ?
						<span>Off</span>
						:
						<span>꺼짐</span>
					}
					<input type={'radio'} name='notification' value={false} defaultChecked={!_user.notification ? true : false} />
				</div>
			</div>
			<BiCheckSquare className='check_btn' onClick={(e) => _handleNotification(e)} />
		</div>
	);
};

export default Component;