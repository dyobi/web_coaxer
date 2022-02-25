import { useSelector } from 'react-redux';
import { BiChevronLeftCircle } from 'react-icons/bi';
import { GiHeartBeats } from 'react-icons/gi';

import {
	TermsEn,
	TermsKo,
	PrivacyPolicyEn,
	PrivacyPolicyKo,
	CookiePolicyEn,
	CookiePolicyKo,
	OAuthPolicyEn,
	OAuthPolicyKo
} from './policy';

import '../index.css';

const Component = ({ show, back }) => {

	const _ui = useSelector(state => state.ui);

	return (
		<div className={`modal_container ${show ? 'show' : ''}`} onClick={() => back()}>
			<div className="modal" onClick={(e) => e.stopPropagation()}>
				<BiChevronLeftCircle className='back_btn' onClick={() => back()} />
				<GiHeartBeats className='logo_icon' />
				<h3>{_ui.lang === 'en_US' ? 'Terms & Conditions' : '이용 약관'}</h3>
				{_ui.lang === 'en_US' ?
					<div className='terms_container'>
						<div className='terms'>
							<p>Terms of Use Agreement</p>
							<TermsEn />
						</div>
						<div className='terms'>
							<p>Privacy Policy</p>
							<PrivacyPolicyEn />
						</div>
						<div className='terms'>
							<p>Cookie Policy</p>
							<CookiePolicyEn />
						</div>
						<div className='terms'>
							<p>What is OAuth?</p>
							<OAuthPolicyEn />
						</div>
					</div>
					:
					<div className='terms_container'>
						<div className='terms'>
							<p>이용약관</p>
							<TermsKo />
						</div>
						<div className='terms'>
							<p>개인정보 처리방침</p>
							<PrivacyPolicyKo />
						</div>
						<div className='terms'>
							<p>쿠키 정책</p>
							<CookiePolicyKo />
						</div>
						<div className='terms'>
							<p>OAuth란?</p>
							<OAuthPolicyKo />
						</div>
					</div>
				}
			</div>
		</div>
	);
};

export default Component;