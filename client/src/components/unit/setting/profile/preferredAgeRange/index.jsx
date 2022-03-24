import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slider';
import { BiCheckSquare } from 'react-icons/bi';

import ErrorAlert from '../../../../util/errorAlert';

import { putUserPreferredAgeRange } from '../../../../../datas';
import { user_p_minAge, user_p_maxAge } from '../../../../../store/actions';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const [alertView, setAlertView] = useState(false);
	const [range, setRange] = useState([_user.preferredMinAge, _user.preferredMaxAge]);

	const _handlePreferredAgeRange = (e) => {
		e.preventDefault();

		const minAge = range[0];
		const maxAge = range[1];

		putUserPreferredAgeRange(_user.email, minAge, maxAge, res => {
			if (res.status === 200) {
				dispatch(user_p_minAge(minAge));
				dispatch(user_p_maxAge(maxAge));
			} else {
				setAlertView(!alertView);
			}
		});
	};

	return (
		<>
			<div className='section'>
				{_ui.lang === 'en_US' ?
					<span>Age Range</span>
					:
					<span>나이</span>
				}
				<div className='radio_container'>
					<Slider
						className='custom_slider'
						thumbClassName='custom_thumb'
						defaultValue={[_user.preferredMinAge, _user.preferredMaxAge]}
						minDistance={10}
						withTracks={false}
						onChange={(range) => setRange(range)}
						pearling
					/>
					{_ui.lang === 'en_US' ?
						<span>{range[0]} to {range[1]}</span>
						:
						<span>{range[0]} ~ {range[1]}</span>
					}
				</div>
				<BiCheckSquare className='check_btn' onClick={(e) => _handlePreferredAgeRange(e)} />
			</div>
			<ErrorAlert alertView={alertView} setAlertView={() => setAlertView()} />
		</>
	);
};

export default Component;