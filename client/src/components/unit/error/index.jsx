import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Alert from '../alert';

import './index.css';

const Component = () => {

	const [alertView, setAlertView] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			setAlertView(true);
		}, 800);
	}, []);
	return (
		<div className='error_container'>
			<>
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
				<div className='wave' />
			</>
			<Alert
				show={alertView}
				setShow={() => setAlertView()}
				type={'confirm'}
				enDesc={'You have reached the wrong way. You will be taken to the main page.'}
				krDesc={'잘못된 접근입니다. 확인을 누르시면 메인화면으로 이동합니다.'}
				cb1={() => {
					setAlertView(false);
					navigate('/home');
				}}
				cb2={() => null}
			/>
		</div>
	);
};

export default Component;