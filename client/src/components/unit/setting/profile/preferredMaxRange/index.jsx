import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const [range, setRange] = useState(310);

	const _handlePreferredMaxRange = (e) => {
		e.preventDefault();
		const preferredMaxRange = document.querySelector(`input[name='preferredMaxRange']`).value;
		console.log(preferredMaxRange);
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
					defaultValue={310}
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