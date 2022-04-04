import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Submit from '../button';
import Alert from '../../../alert';
import ErrorAlert from '../../../../util/errorAlert';

import { user_data, user_chat } from '../../../../../store/actions';
import { deleteUser } from '../../../../../datas';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);

	const [alertView, setAlertView] = useState(false);
	const [dangerAlertView, setDangerAlertView] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const _handleDeactivate = () => {
		deleteUser(_user.email, res => {
			if (res.status === 200) {
				dispatch(user_data({
					id: -1,
					email: '',
					firstName: '',
					lastName: '',
					dateOfBirth: '',
					gender: 0,
					bio: '',
					latitude: 0,
					longitude: 0,
					notification: 1,
					preferredGender: 0,
					preferredMinAge: 0,
					preferredMaxAge: 100,
					preferredMaxRange: 310,
					pictures: {},
					isComplete: false
				}));
				dispatch(user_chat({}));
				navigate('/home');
			} else {
				setAlertView(!alertView);
			}
		});
	};

	return (
		<>
			<div className='section'>
				{_ui.lang === 'en_US' ?
					<span>Account</span>
					:
					<span>계정</span>
				}
				<div className='radio_container'>
					{_ui.lang === 'en_US' ?
						<span>Deactivate Account</span>
						:
						<span>계정 지우기</span>
					}
				</div>
				<Submit onClick={() => setDangerAlertView(!dangerAlertView)} />
			</div>
			<ErrorAlert alertView={alertView} setAlertView={() => setAlertView()} />
			<Alert
				show={dangerAlertView}
				setShow={() => setDangerAlertView()}
				type={'question'}
				enDesc={'Once you deactivate your account, your data will be lost. If you want to proceed, please click YES.'}
				krDesc={'계정을 지우시면 모든 데이터는 복구가 불가능합니다. 계속 진행 하시겠습니까?'}
				cb1={() => _handleDeactivate()}
				cb2={() => null}
			/>
		</>
	);
};

export default Component;