import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cookie from 'react-cookies';
import Wrapper from 'react-div-100vh';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

import Header from '../unit/nav';
import Core from '../core';
import Callback from '../unit/landing/callback';
import Error from '../unit/error';

import NotificationGet from '../../assets/sounds/notification_get.mp3';
import NotificationSend from '../../assets/sounds/notification_send.mp3';

import { ui_color, user_isComplete, user_latitude, user_longitude, user_chat } from '../../store/actions';
import { putPosition, getChatroom } from '../../datas';

import './index.css';

export let stomp;

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const [position, setPosition] = useState({});
	const dispatch = useDispatch();

	const getColor = cookie.load('theme-color');

	if (getColor !== undefined && getColor !== _ui.color) {
		dispatch(ui_color(getColor));
	}

	const _handleUser = () => {
		if (
			_user.id === -1 ||
			_user.lastName === '' || _user.lastName === null ||
			_user.firstName === '' || _user.firstName === null ||
			_user.dateOfBirth === '' || _user.dateOfBirth === null ||
			_user.bio === '' || _user.bio === null ||
			_user.pictures.length === 0
		) {
			dispatch(user_isComplete(false));
		} else {
			dispatch(user_isComplete(true));
		}
	};

	window.onload = async () => {

		const getCoords = async () => {
			const pos = await new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(resolve, reject);
			});

			return {
				lat: pos.coords.latitude,
				long: pos.coords.longitude
			};
		};

		setPosition(await getCoords());
	};

	useEffect(() => {
		if (_user.id !== -1) {
			stomp = Stomp.over(() => new SockJS('/api/stomp'));
			stomp.connect({}, () => {
				getChatroom(_user.id, res => {
					if (res.status === 200) {
						dispatch(user_chat(res.obj));
					}
				})
			});
			stomp.debug = () => { };
		} else if (stomp) {
			stomp.disconnect();
			stomp = undefined;
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [_user.id]);

	useEffect(() => {

		_handleUser();

		if (_user.id !== -1 && Object.keys(position).length > 0) {
			putPosition(_user.email, position.lat, position.long, res => {
				if (res.status === 200) {
					dispatch(user_latitude(position.lat));
					dispatch(user_longitude(position.long));
				}
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [_user.id, position]);

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
			<audio id='notification_get' style={{ display: 'none' }} autoPlay=''>
				<source src={NotificationGet} type='audio/mp3' />
			</audio>
			<audio id='notification_send' style={{ display: 'none' }} autoPlay=''>
				<source src={NotificationSend} type='audio/mp3' />
			</audio>
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
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		</Wrapper>
	);
}

export default Component;



