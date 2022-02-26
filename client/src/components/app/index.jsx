import { useSelector } from 'react-redux';
import Wrapper from 'react-div-100vh';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../unit/nav';
import Core from '../core';
import Callback from '../unit/landing/callback';

import './index.css';

const Component = () => {

	const ui = useSelector(state => state.ui);

	return (
		<Wrapper>
			<style>
				{`
					:root {
						--color-100: ${ui.color + 'ff'};
						--color-90: ${ui.color + 'e6'};
						--color-80: ${ui.color + 'cc'};
						--color-70: ${ui.color + 'b3'};
						--color-60: ${ui.color + '99'};
						--color-50: ${ui.color + '80'};
						--color-40: ${ui.color + '66'};
						--color-30: ${ui.color + '4d'};
						--color-20: ${ui.color + '33'};
						--color-10: ${ui.color + '1a'};
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



