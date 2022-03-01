import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactDom from 'react-dom';
import { BiXCircle } from 'react-icons/bi';
import { GiHeartBeats } from 'react-icons/gi';

import TermsModal from '../terms';

import AppStore from '../../../../assets/icons/appstore.png';
import PlayStore from '../../../../assets/icons/playstore.png';

import GoogleLogo from '../../../../assets/icons/google_logo.png';
import FacebookLogo from '../../../../assets/icons/facebook_logo.png';
import GithubLogo from '../../../../assets/icons/github_logo.png';

import {
	GOOGLE_ID,
	FACEBOOK_ID,
	GITHUB_ID,
	APP_REDIRECT_URL
} from '../../../../constants';

import '../index.css';

const Component = ({ show, close }) => {

	const _ui = useSelector(state => state.ui);
	const [termsView, setTermsView] = useState(false);

	const _handleGoogleSignin = () => {
		window.open(
			`https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_ID}&scope=openid%20email%20profile&redirect_uri=${APP_REDIRECT_URL}/google&response_type=code`,
			'_self'
		);
	};

	const _handleFacebookSignin = () => {
		window.open(
			`https://www.facebook.com/v6.0/dialog/oauth?client_id=${FACEBOOK_ID}&redirect_uri=${APP_REDIRECT_URL}/facebook`,
			'_self'
		);
	};

	const _handleGithubSignin = () => {
		window.open(
			`https://github.com/login/oauth/authorize?client_id=${GITHUB_ID}&read:user&redirect_uri=${APP_REDIRECT_URL}/github`,
			'_self'
		);
	};

	return ReactDom.createPortal(
		<>
			<div className={`modal_container ${show ? 'show' : ''}`} onClick={() => close()}>
				<div className="modal" onClick={(e) => e.stopPropagation()}>
					<BiXCircle className='close_btn' onClick={() => close()} />
					<GiHeartBeats className='logo_icon' />
					<h3>{_ui.lang === 'en_US' ? 'GET STARTED' : '계정 만들기'}</h3>
					<span>
						{_ui.lang === 'en_US' ?
							<>
								By clicking Log In, you agree to our <span onClick={() => setTermsView(!termsView)}>Terms</span>. Learn how we process your data in our <span onClick={() => setTermsView(!termsView)}>Privacy Policy</span> and <span onClick={() => setTermsView(!termsView)}>Cookie Policy</span>.
							</>
							:
							<>
								로그인하면 Coaxer <span onClick={() => setTermsView(!termsView)}>이용약관</span>에 동의하는 것으로 간주됩니다. Coaxer의 회원 정보 처리 방식은 <span onClick={() => setTermsView(!termsView)}>개인정보 처리방침</span> 및 <span onClick={() => setTermsView(!termsView)}>쿠키 정책</span>에서 확인해 보세요.
							</>
						}
					</span>
					<div className='login_btn_container'>
						<div className="login_btn" onClick={() => _handleGoogleSignin()}>
							<img src={GoogleLogo} alt='' />
							{_ui.lang === 'en_US' ?
								'Log in with Google'
								:
								'Google 계정으로 로그인'
							}
						</div>
						<div className="login_btn" onClick={() => _handleFacebookSignin()}>
							<img src={FacebookLogo} alt='' />
							{_ui.lang === 'en_US' ?
								'Log in with Facebook'
								:
								'Facebook 계정으로 로그인'
							}
						</div>
						<div className="login_btn" onClick={() => _handleGithubSignin()}>
							<img src={GithubLogo} alt='' />
							{_ui.lang === 'en_US' ?
								'Log in with Github'
								:
								'Github 계정으로 로그인'
							}
						</div>
						<p onClick={() => setTermsView(!termsView)}>
							{_ui.lang === 'en_US' ?
								'What is OAuth 2.0?'
								:
								'OAuth 2.0이란?'
							}
						</p>
					</div>
					<hr style={{ width: '320px', margin: '0', padding: '0', color: 'gray' }} />
					<div className='appstore_container'>
						<img src={AppStore} alt='' />
						<img src={PlayStore} alt='' />
					</div>
				</div>
			</div>
			<TermsModal
				show={termsView}
				back={() => setTermsView(!termsView)}
			/>
		</>,
		document.getElementById('root_modal_account')
	);
};

export default Component;