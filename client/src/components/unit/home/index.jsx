import { useState } from 'react';
import { useSelector } from 'react-redux';
import $ from 'jquery';

import AccountModal from '../landing/account';

import './index.css';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const [width, setWidth] = useState(window.innerWidth);
	const [signUpView, setSignUpView] = useState(false);

	$(window).on('resize', () => {
		setWidth(window.innerWidth);
	});

	return (
		<>
			<AccountModal
				show={signUpView}
				close={() => setSignUpView(!signUpView)}
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
					onClick={() => setSignUpView(!signUpView)}
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
			<div style={{ width: '100%', height: '600px' }} />
		</>
	);
};

export default Component;