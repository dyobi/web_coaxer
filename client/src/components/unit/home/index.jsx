import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import $ from 'jquery';

import AccountModal from '../landing/account';

import './index.css';

const Component = () => {

	const mounted = useRef(false);
	const _ui = useSelector(state => state.ui);
	const [width, setWidth] = useState(window.innerWidth);
	const [accountView, setAccountView] = useState(false);

	$(window).on('resize', () => {
		if (mounted.current) {
			setWidth(window.innerWidth);
		}
	});

	useEffect(() => {
		mounted.current = true;

		return () => {
			mounted.current = false;
		};
	}, []);

	return (
		<>
			<AccountModal
				show={accountView}
				close={() => setAccountView(!accountView)}
			/>
			<div
				className='home_main_img_container'
				style={width > 700 ? { height: '100vh' } : { height: 'calc(100vh - 80px)' }}
			>
				<div className='home_title'>
					{_ui.lang === 'en_US' ?
						'Coaxer®'
						:
						'콕서®'
					}
				</div>
				<div className='home_account_btn'
					onClick={() => setAccountView(!accountView)}
				>
					{_ui.lang === 'en_US' ?
						'CREATE AN ACCOUNT'
						:
						'계정 만들기'
					}
				</div>
				<div className='home_description'>
					{_ui.lang === 'en_US' ?
						'All photos and models are used for illustrative purposes only'
						:
						'모든 사진과 모델은 예시적인 목적으로만 사용됩니다.'
					}
				</div>
			</div>
			<div style={{ width: '100%', height: '600px', display: 'flex' }}>
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
			</div>
		</>
	);
};

export default Component;