import { useState } from 'react';
import $ from 'jquery';

import Home from '../unit/home';
import Overview from '../unit/overview';
import LookUp from '../unit/lookup';
import Chat from '../unit/chat';
import Setting from '../unit/setting';

import './index.css';

const Component = (props) => {

	const [width, setWidth] = useState(window.innerWidth);

	$(window).on('resize', () => {
		setWidth(window.innerWidth);
	});

	return (
		<>
			{props.page === '0' ?
				<div className={width > 700 ? 'core_maxwidth_home_container' : 'core_minwidth_home_container'}>
					<Home />
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

