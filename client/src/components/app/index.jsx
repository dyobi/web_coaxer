import { useSelector, useDispatch } from 'react-redux';
import cookie from 'react-cookies';
import Wrapper from 'react-div-100vh';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../unit/nav';
import Core from '../core';
import Callback from '../unit/landing/callback';
import { ui_color } from '../../store/actions';

import './index.css';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const dispatch = useDispatch();

	const getColor = cookie.load('theme-color');

	if (getColor !== undefined && getColor !== _ui.color) {
		dispatch(ui_color(getColor));
	}

	return (
		<Wrapper>
			<style>
				{`
					:root {
						--color-100: ${_ui.color + 'ff'};
						--color-90: ${_ui.color + 'e6'};
						--color-80: ${_ui.color + 'cc'};
						--color-70: ${_ui.color + 'b3'};
						--color-60: ${_ui.color + '99'};
						--color-50: ${_ui.color + '80'};
						--color-40: ${_ui.color + '66'};
						--color-30: ${_ui.color + '4d'};
						--color-20: ${_ui.color + '33'};
						--color-10: ${_ui.color + '1a'};
					}
				`}
			</style>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Navigate replace to='/home' />} />
					<Route path='/home' element={<Core page='0' />} />
					<Route path='/overview' element={<Core page='1' />} />
					<Route path='/lookup' element={<Core page='2' />} />
					<Route path='/chat' element={<Core page='3' />} />
					<Route path='/setting' element={<Core page='4' />} />
					<Route path='/oauth/:source' element={<Callback />} />
				</Routes>
			</BrowserRouter>
		</Wrapper>
	);
}

export default Component;



