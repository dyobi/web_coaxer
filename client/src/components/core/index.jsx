import { useState } from 'react';
import { useDispatch } from 'react-redux';
import $ from 'jquery';

import { ui_color } from '../../store/actions';
import Home from '../unit/home';
import Overview from '../unit/overview';
import LookUp from '../unit/lookup';
import Chat from '../unit/chat';
import Setting from '../unit/setting';

import './index.css';

const Component = (props) => {

	const dispatch = useDispatch();

	const [width, setWidth] = useState(window.innerWidth);

	$(window).on('resize', () => {
		setWidth(window.innerWidth);
	});

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

	const _change = () => {
		dispatch(ui_color(colors[16]));
	};

	return (
		<>
			{props.page === '0' ?
				<div className={width > 700 ? 'core_maxwidth_home_container' : 'core_minwidth_home_container'}>
					<Home />
					{/* <button onClick={() => _change()}>HI</button> */}
				</div>
				:
				<div className={width > 700 ? 'core_maxwidth_container' : 'core_minwidth_container'}>
					<div className='core_inherit_container'>
						{props.page === '1' ? <Overview /> : ''}
						{props.page === '2' ? <LookUp /> : ''}
						{props.page === '3' ? <Chat /> : ''}
						{props.page === '4' ? <Setting /> : ''}
					</div>
				</div>
			}
		</>
	);
}

export default Component;

