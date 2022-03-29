import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Submit from '../button';
import ErrorAlert from '../../../../util/errorAlert';

import { putUserBio } from '../../../../../datas';
import { user_bio } from '../../../../../store/actions';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const [alertView, setAlertView] = useState(false);
	const dispatch = useDispatch();

	const _handleBio = (e) => {
		e.preventDefault();

		const bio = document.querySelector(`textarea[name='bio']`).value;
		const _blank = /^\s+|\s+$/g;

		if (bio.replace(_blank, '') !== '' && bio.length <= 500) {
			putUserBio(_user.email, bio, res => {
				if (res.status === 200) {
					dispatch(user_bio(bio));
				} else {
					setAlertView(!alertView);
				}
			});
		} else {
			setAlertView(!alertView);
		}
	};

	return (
		<>
			<div className='section_wide'>
				<div className='section_wide_head'>
					{_ui.lang === 'en_US' ?
						<span>Bio</span>
						:
						<span>자기소개</span>
					}
					<Submit onClick={(e) => _handleBio(e)} />
				</div>
				<textarea name='bio' maxLength={500} defaultValue={_user.bio} />
			</div>
			<ErrorAlert alertView={alertView} setAlertView={() => setAlertView()} />
		</>
	);
};

export default Component;