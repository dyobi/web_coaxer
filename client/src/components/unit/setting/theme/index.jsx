import { useDispatch } from 'react-redux';
import cookie from 'react-cookies';

import { ui_color } from '../../../../store/actions';

import './index.css';

const Component = () => {

	const dispatch = useDispatch();

	const colors = [
		'#c0392b',
		'#e74c3c',
		'#d35400',
		'#e67e22',
		'#f39c12',
		'#f1c40f',
		'#16a085',
		'#1abc9c',
		'#27ae60',
		'#2ecc71',
		'#2980b9',
		'#3498db',
		'#8e44ad',
		'#9b59b6',
		'#7f8c8d',
		'#95a5a6',
		'#2c3e50',
		'#34495e',
	];

	const _handleColor = (color) => {
		cookie.save('theme-color', color, { path: '/' });
		dispatch(ui_color(color));
	}

	return (
		<div className='color_container'>
			{colors.map((color, index) =>
				<div
					className='color'
					key={index}
					style={{ backgroundColor: color + 'b3', borderColor: color}}
					onClick={() => _handleColor(color)}
				/>
			)}
		</div>
	);
};

export default Component;