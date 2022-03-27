import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

import AccountModal from '../landing/account';
import TermsModal from '../landing/terms';

import HomePhone from '../../../assets/images/home_phone.png'
import AppStore from '../../../assets/icons/appstore.png';
import PlayStore from '../../../assets/icons/playstore.png';

import './index.css';

const Component = () => {

	const mounted = useRef(false);
	const navigate = useNavigate();

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);

	const [width, setWidth] = useState(window.innerWidth);
	const [accountView, setAccountView] = useState(false);
	const [termsView, setTermsView] = useState(false);

	$(window).on('resize', () => {
		if (mounted.current) {
			setWidth(window.innerWidth);
		}
	});

	useEffect(() => {
		mounted.current = true;

		try {
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		} catch {
			window.scrollTo(0, 0);
		}

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
				{_user.id === -1 ?
					<div className='home_account_btn'
						onClick={() => setAccountView(!accountView)}
					>
						{_ui.lang === 'en_US' ?
							<span>CREATE AN ACCOUNT</span>
							:
							<span>계정 만들기</span>
						}
					</div>
					:
					''
				}
				{_user.id !== -1 && !_user.isComplete ?
					<div className='home_account_btn'
						onClick={() => navigate('/setting')}
					>
						{_ui.lang === 'en_US' ?
							<span>GO TO SETTINGS</span>
							:
							<span>기본정보 설정</span>
						}
					</div>
					:
					''
				}
				{_user.isComplete ?
					<div className='home_account_btn'
						onClick={() => navigate('/lookup')}
					>
						{_ui.lang === 'en_US' ?
							<span>GO GET MY BABE</span>
							:
							<span>나의 반쪽 찾으러 가기</span>
						}
					</div>
					:
					''
				}
				<div className='home_description'>
					{_ui.lang === 'en_US' ?
						'All photos and models are used for illustrative purposes only'
						:
						'모든 사진과 모델은 예시적인 목적으로만 사용됩니다.'
					}
				</div>
			</div>
			<div className='home_wrapper'>
				<div className='home_container'>
					{_ui.lang === 'en_US' ?
						<h3>Join free-spirited men and women and experience open-minded dating on Coaxer</h3>
						:
						<h3>자유분방한 남녀와 함께 Coaxer 에서 틀에 밖히지 않은 데이트를 경험하세요</h3>
					}
					<div className='home_dash' />
					{_ui.lang === 'en_US' ?
						<div className='home_rich_text'>
							<p>
								The Tinder app may be one of the newest fads when it comes to mobile dating, but if you’re looking for a casual affair or a private, open-minded relationship, Coaxer offers unique, important features that you just won't find with Tinder dating.
							</p>
							<figure>
								<img src={HomePhone} alt='' />
							</figure>
							<p>
								Sure, you can swipe left or right on Tinder, if you don’t mind sharing your personal information and preferences publicly for all your friends and the whole world to see. The Tinder dating app was not designed to be discreet, which is why Tinder plus other dating apps connect to your personal Facebook for all your friends and family to see.
							</p>
							<p>
								Unlike Tinder and other apps similar to Tinder which have rules and endless, tedious swiping, Coaxer is a more free-spirited and flexible dating site where it’s easy for women and men to meet and live out their deepest desires.
							</p>
							<p>
								At Coaxer, we never make you link to your personal Facebook page like Tinder does. That’s why tons of free-spirited people who are looking for excitement and adventurous connections, visit and join Coaxer instead of using Tinder online dating.
							</p>
							<p>
								By now, you’ve probably guessed the top reasons why millions of people choose Coaxer as an alternative to the Tinder website. Coaxer only offers OAuth2 login service so as to avoid scammers and any other weirdos. And tracks users' coordinate every single time to show where your ideal people are located at.
							</p>
							<p>
								Furthermore at Coaxer, unlike on Tinder, you can relax, express yourself freely and enjoy peace of mind, while you’re meeting like-minded people who are as open-minded and free-spirited as you are.
							</p>
						</div>
						:
						<div className='home_rich_text'>
							<p>
								Tinder 앱은 모바일 데이팅 어플리케이션의 최신 유행 중 하나일 수 있지만, 가벼운 연애나 사적으로 개방된 관계를 원한다면 Tinder 데이팅에서는 찾을 수 없는 독특하고 중요한 기능을 Coaxer 에서 제공합니다.
							</p>
							<figure>
								<img src={HomePhone} alt='' />
							</figure>
							<p>
								물론 Tinder 에서 왼쪽이나 오른쪽으로 스와이프 할 수 있습니다. 개인정보와 기본설정을 공개하여 친구나 전 세계가 볼 수 있도록 공유해도 상관없습니다. Tinder 데이팅 앱은 신중하게 설계되지 않았기 때문에 당신의 친구나 가족이 볼 수 있도록 당신의 개인 페이스북에 접속하는 것입니다.
							</p>
							<p>
								틀에밖힌 지루한 디자인을 가진 Tinder와 유사한 다른 앱들과 달리, Coaxer은 여성과 남성이 그들의 가장 깊은 욕구를 충족시키고 실천하기 쉬운 자유분방하고 유연한 데이트 사이트입니다.
							</p>
							<p>
								Coaxer 에서는 Tinder처럼 개인 페이스북 페이지에 링크하지 않습니다. 그렇기 때문에 흥분과 모험적인 인맥을 찾고 있는 수천 명의 자유분방한 사람들이 다른 온라인 데이팅 사이트 대신 Coaxer를 방문해 주십니다.
							</p>
							<p>
								지금까지, 여러분은 많은 사람들이 틴더 웹사이트의 대안으로 Coaxer을 선택하는 가장 큰 이유를 추측해 봤을 것입니다. Coaxer는 사기꾼 또는 이상한 사람들이 접근하지 못하게 Google, Facebook 그리고 Github 계정을 통한 로그인만을 허락합니다. 또한 당신의 파트너의 정확한 위치를 지도상에 표기해 주는 서비스를 제공합니다.
							</p>
							<p>
								게다가 Coaxer에서는, Tinder 와는 달리, 자신처럼 개방적이고 자유분방한 사람을 만나면서 느긋하게, 자유롭게 표현하고, 마음의 평화를 즐길 수 있습니다.
							</p>
						</div>
					}
					<div className='home_section_divider' />
					<div className='home_get_app'>
						{_ui.lang === 'en_US' ?
							<span>GET THE APP</span>
							:
							<span>모바일로 체험</span>
						}
						<img src={AppStore} alt='' />
						<img src={PlayStore} alt='' />
					</div>
					<div className='home_section_divider' />
					<div className='home_footer'>
						<div className='terms'>
							<span className='span_hover' onClick={() => setTermsView(!termsView)}>
								{_ui.lang === 'en_US' ?
									<span>Terms</span>
									:
									<span>이용약관</span>
								}
							</span>
							<span> / </span>
							<span className='span_hover' onClick={() => setTermsView(!termsView)}>
								{_ui.lang === 'en_US' ?
									<span>Private Policy</span>
									:
									<span>개인정보 처리방침</span>
								}
							</span>
							<span> / </span>
							<span className='span_hover' onClick={() => setTermsView(!termsView)}>
								{_ui.lang === 'en_US' ?
									<span>Cookie Policy</span>
									:
									<span>쿠키정책</span>
								}
							</span>
							<span> / </span>
							<span className='span_hover' onClick={() => setTermsView(!termsView)}>
								{_ui.lang === 'en_US' ?
									<span>OAuth 2.0</span>
									:
									<span>OAuth란?</span>
								}
							</span>
						</div>
						<span>© 2022 LLC, All Rights Reserved.</span>
					</div>
				</div>
			</div>
			<TermsModal
				show={termsView}
				back={() => setTermsView(!termsView)}
			/>
		</>
	);
};

export default Component;