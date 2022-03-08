import { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slider';
import { BiCheckSquare } from 'react-icons/bi';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const [rangeLeft, setRangeLeft] = useState(0);
	const [rangeRight, setRangeRight] = useState(100);

	const _handlePreferredAgeRange = (e) => {
		e.preventDefault();
		const ageRangeLeft = document.querySelector(`input[name='leftVal']`).value;
		const ageRangeRight = document.querySelector(`input[name='rightVal']`).value;
		console.log(ageRangeLeft + ' / ' + ageRangeRight);
	};

	return (
		<div className='section'>
			{_ui.lang === 'en_US' ?
				<span>Age Range</span>
				:
				<span>나이범위</span>
			}
			<div className='radio_container'>
				<Slider
					className='custom_slider'
					thumbClassName='custom_thumb'
					defaultValue={[0, 100]}
					minDistance={10}
					pearling
				/>
				{_ui.lang === 'en_US' ?
					// <span>{rangeLeft} to {rangeRight}</span>
					<span>No Limits</span>
					:
					<span>{rangeLeft} ~ {rangeRight}</span>
				}
			</div>
			<BiCheckSquare className='check_btn' onClick={(e) => _handlePreferredAgeRange(e)} />
		</div>
	);
};

export default Component;