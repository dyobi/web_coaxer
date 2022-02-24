import { useSelector } from 'react-redux';
import { BiXCircle } from 'react-icons/bi';
import { GiHeartBeats } from 'react-icons/gi';

import '../index.css';

const Component = ({ show, back }) => {

	const _ui = useSelector(state => state.ui);

	return (
		<div className={`modal_container ${show ? 'show' : ''}`} onClick={() => back()}>
			<div className="modal" onClick={(e) => e.stopPropagation()}>
				<BiXCircle className='close_btn' onClick={() => back()} />
				<GiHeartBeats className='logo_icon' />
				<h3>{_ui.lang === 'en_US' ? 'Terms & Conditions' : '이용 약관'}</h3>
				<span>
					{_ui.lang === 'en_US' ?
						<>
							By clicking Log In, you agree to our <span>Terms</span>. Learn how we process your data in our <span>Privacy Policy</span> and <span>Cookie Policy</span>.
						</>
						:
						<>
							로그인하면 Coaxer <span>이용약관</span>에 동의하는 것으로 간주됩니다. Coaxer의 회원 정보 처리 방식은 <span>개인정보 처리방침</span> 및 <span>쿠키 정책</span>에서 확인해 보세요.
						</>
					}
				</span>
			</div>
		</div>
	);
};

export default Component;