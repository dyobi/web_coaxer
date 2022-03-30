import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Submit from '../button';
import ErrorAlert from '../../../../util/errorAlert';

import { putUserNotification } from '../../../../../datas';
import { user_notification } from '../../../../../store/actions';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const [alertView, setAlertView] = useState(false);
	const dispatch = useDispatch();

	const _handleNotification = (e) => {
		e.preventDefault();

		const notification = document.querySelector(`input[name='notification']:checked`).value;

		putUserNotification(_user.email, notification, res => {
			if (res.status === 200) {
				dispatch(user_notification(JSON.parse(notification)));
			} else {
				setAlertView(!alertView);
			}
		});
	};

	return (
		<>
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
				<Submit onClick={(e) => _handleNotification(e)} />
			</div>
			<ErrorAlert alertView={alertView} setAlertView={() => setAlertView()} />
		</>
	);
};

export default Component;