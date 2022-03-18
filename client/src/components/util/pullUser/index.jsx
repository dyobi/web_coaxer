import { useState } from 'react';
import { useSelector } from 'react-redux';
import $ from 'jquery';
import { BiChevronRightCircle, BiChevronLeftCircle, BiHeartCircle, BiBlock } from 'react-icons/bi';

import Alert from '../../unit/alert';

import './index.css';

const Component = ({ usingFor, user }) => {

	const _ui = useSelector(state => state.ui);
	const [alertView, setAlertView] = useState(false);
	const [picture, setPicture] = useState({});

	const _handleLikes = () => {
		console.log('Liked');
	};

	const _handleMarkerInfo = () => {
		$('.pull_user_container').css('flex-basis', '0');
		if (usingFor === 'chat') $('.chat_list').css('flex-basis', '100%');
	};

	$(() => {
		if (user !== null && user !== undefined) {
			document.querySelector('.info_pictures_container').scrollLeft = 0;

			const slider = document.querySelector('.info_pictures_container');
			let isDown = false;
			let startX;
			let scrollLeft;

			slider.addEventListener('mousedown', (e) => {
				isDown = true;
				slider.classList.add('active');
				startX = e.pageX - slider.offsetLeft;
				scrollLeft = slider.scrollLeft;
			});

			slider.addEventListener('mouseleave', () => {
				isDown = false;
				slider.classList.remove('active');
			});

			slider.addEventListener('mouseup', () => {
				isDown = false;
				slider.classList.remove('active');
			});

			slider.addEventListener('mousemove', (e) => {
				e.preventDefault();
				if (!isDown) return;
				const x = e.pageX - slider.offsetLeft;
				const walk = (x - startX) * 1.2;
				slider.scrollLeft = scrollLeft - walk;
			});
		}
	});

	return (
		<>
			{user !== null && user !== undefined ?
				<div className={`pull_user_container ${usingFor === 'lookup' ? 'for_lookup' : 'for_chat'}`}>
					<div className='info_title'>
						{usingFor === 'lookup' ?
							<BiChevronRightCircle
								className='back_btn'
								onClick={() => _handleMarkerInfo()}
							/>
							:
							<BiChevronLeftCircle
								className='back_btn'
								onClick={() => _handleMarkerInfo()}
							/>
						}
						<div className='info_username'>
							{_ui.lang === 'en_US' ?
								<>{user.firstName} {user.lastName}</>
								:
								<>{user.lastName} {user.firstName}</>
							}
						</div>
						{usingFor === 'lookup' ?
							<BiHeartCircle
								className='right_btn for_lookup'
								onClick={() => _handleLikes()}
							/>
							:
							<BiBlock className='right_btn for_chat' />
						}
					</div>
					<hr style={{ width: 'calc(100% - 30px)', margin: '0', padding: '0' }} />
					<div className='info_pictures_container'>
						{user.pictures.map((pic, index) =>
							<img
								key={index}
								src={process.env.PUBLIC_URL + `/tmp/${pic.name}.${pic.type}`}
								alt=''
								onClick={() => {
									setPicture(pic);
									setAlertView(true);
								}}
							/>
						)}
					</div>
					<div className='information_container'>
						<hr style={{ width: '100%', margin: '0', padding: '0' }} />
						{_ui.lang === 'en_US' ?
							<>
								<p>Distance</p>
								<span>{(user.distance).toFixed(2)} miles away</span>
								<hr style={{ width: '100%', margin: '0', padding: '0' }} />
								<p>Age</p>
								<span>{user.dateOfBirth.replace(/-/gi, '.')} / {user.age}</span>
								<hr style={{ width: '100%', margin: '0', padding: '0' }} />
								<p>Bio</p>
							</>
							:
							<>
								<p>나와의 거리</p>
								<span>{(user.distance * 1.60934).toFixed(2)} km 떨어짐</span>
								<hr style={{ width: '100%', margin: '0', padding: '0' }} />
								<p>나이</p>
								<span>{user.dateOfBirth.replace(/-/gi, '.')} / {user.age}세</span>
								<hr style={{ width: '100%', margin: '0', padding: '0' }} />
								<p>자기 소개</p>
							</>
						}
						<span>{user.bio}</span>
					</div>
				</div>
				:
				''
			}
			<Alert
				show={alertView}
				setShow={() => setAlertView()}
				type={'confirm'}
				img={picture}
				cb1={() => setAlertView(false)}
				cb2={() => null}
			/>
		</>
	);
};

export default Component;