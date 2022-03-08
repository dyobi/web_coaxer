import { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slider';
import { BiCheckSquare } from 'react-icons/bi';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const [range, setRange] = useState([0, 100]);

	const _handlePreferredAgeRange = (e) => {
		e.preventDefault();
		const minAge = range[0];
		const maxAge = range[1];
		console.log(minAge + ' / ' + maxAge);
	};

	return (
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
					defaultValue={[0, 100]}
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
	);
};

export default Component;