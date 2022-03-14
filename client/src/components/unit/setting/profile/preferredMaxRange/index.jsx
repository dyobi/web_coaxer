import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';

import { putUserPreferredMaxRange } from '../../../../../datas';
import { user_p_maxRange } from '../../../../../store/actions';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const dispatch = useDispatch();
	const [range, setRange] = useState(_user.preferredMaxRange);

	const _handlePreferredMaxRange = (e) => {
		e.preventDefault();

		const preferredMaxRange = document.querySelector(`input[name='preferredMaxRange']`).value;

		putUserPreferredMaxRange(_user.email, preferredMaxRange, res => {
			if (res.status === 200) {
				dispatch(user_p_maxRange(preferredMaxRange));
			} else {
				console.log('handle_error');
			}
		});
	};

	return (
		<div className='section'>
			{_ui.lang === 'en_US' ?
				<span>Max Range</span>
				:
				<span>최대거리</span>
			}
			<div className='radio_container'>
				<input type={'range'}
					name='preferredMaxRange'
					defaultValue={_user.preferredMaxRange}
					min={10}
					max={310}
					step={10}
					onChange={() => setRange(parseInt(document.querySelector(`input[name='preferredMaxRange']`).value))}
				/>
				<span>
					{range === 310 ?
						<>
							{_ui.lang === 'en_US' ?
								<>No Limits</>
								:
								<>제한없음</>
							}
						</>
						:
						<>
							{_ui.lang === 'en_US' ?
								<>{range} miles</>
								:
								<>{range} 마일</>
							}
						</>
					}
				</span>

			</div>
			<BiCheckSquare className='check_btn' onClick={(e) => _handlePreferredMaxRange(e)} />
		</div>
	);
};

export default Component;