import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AccountModal from '../../unit/landing/account';

import './index.css';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const [accountView, setAccountView] = useState(false);
	const navigate = useNavigate();

	return (
		<>
			<AccountModal
				show={accountView}
				close={() => setAccountView(!accountView)}
			/>
			<div className='interceptor_container'>
				<div className='interceptor'>
					<div className='interceptor_title'>
						{_ui.lang === 'en_US' ?
							'Coaxer®'
							:
							'콕서®'
						}
					</div>
					{_user.id === -1 ?
						<div className='interceptor_account_btn'
							onClick={() => setAccountView(!accountView)}
						>
							{_ui.lang === 'en_US' ?
								'CREATE AN ACCOUNT'
								:
								'계정 만들기'
							}
						</div>
						:
						<div className='interceptor_account_btn'
							onClick={() => navigate('/setting')}
						>
							{_ui.lang === 'en_US' ?
								'GO TO SETTINGS'
								:
								'기본정보 설정'
							}
						</div>
					}
					<div className='interceptor_description'>
						{_ui.lang === 'en_US' ?
							'Only Coaxer members can use our services. You can create an account easily via Google, Facebook, and Github account. Don\'t forget setting your initial information to be matched!'
							:
							'Coaxer 사용자만 서비스를 이용하실 수 있습니다. Google, Facebook 그리고 Github 를 통해서 손쉽게 가입하실 수 있습니다. 당신의 파트너를 찾기 위해 기본적인 사용자 정보를 입력하여 주세요!'
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default Component;