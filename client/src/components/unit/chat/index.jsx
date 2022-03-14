import { useSelector } from 'react-redux';
import { BiXCircle } from 'react-icons/bi';
import $ from 'jquery';

import Chatroom from './chatroom';
import Profile from '../../util/pullUser';
import Interceptor from '../../util/interceptor';

import './index.css';

import TempImg from '../../../assets/images/1.jpg';

const Component = () => {

	const _user = useSelector(state => state.user);

	const _handleChatroom = (setVal) => {
		if (setVal) {
			$('.chat_list').css('width', '60%');
			$('.chat_delete_btn').css('visibility', 'hidden');
			$('.chat_delete_btn').css('opacity', '0');
			$('.chatroom').css('flex-basis', '100%');
		} else {
			$('.chat_list').css('width', '100%');
			$('.chat_delete_btn').css('visibility', 'visible');
			$('.chat_delete_btn').css('opacity', '1');
			$('.chatroom').css('flex-basis', '0');
		}
	};

	const _handleViewProfile = (e, setVal) => {
		e.stopPropagation();
		if (setVal) {
			$('.chat_list').css('flex-basis', '0');
			$('.pull_user_container').css('flex-basis', '100%');
		} else {
			$('.chat_list').css('flex-basis', '100%');
			$('.pull_user_container').css('flex-basis', '0');
		}
	};

	const _handleDeleteChat = (e) => {
		e.stopPropagation();
		console.log('delete');
	};

	$(() => {
		if (_user.id !== -1) {
			const slider = document.querySelector('.chat_list');
			let isDown = false;
			let startY;
			let scrollTop;

			slider.addEventListener('mousedown', (e) => {
				isDown = true;
				slider.classList.add('active');
				startY = e.pageY - slider.offsetTop;
				scrollTop = slider.scrollTop;
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
				const y = e.pageY - slider.offsetTop;
				const walk = (y - startY) * 1.2;
				slider.scrollTop = scrollTop - walk;
			});
		}
	});

	return (
		<div className='chat_container'>
			{_user.id === -1 || !_user.isComplete ?
				<Interceptor />
				:
				<>
					<Profile usingFor='chat' />
					<div className='chat_list'>
						<div className='chat_list_each' onClick={() => _handleChatroom(true)}>
							<img src={TempImg} alt='' onClick={(e) => _handleViewProfile(e, true)} />
							<div className='chat_thumbnail_container'>
								<p>Luke Kim</p>
								<span>hello hello hello hello hello hello hello hello</span>
							</div>
							<div className='chat_delete_container'>
								<BiXCircle className='chat_delete_btn' onClick={(e) => _handleDeleteChat(e)} />
							</div>
						</div>
					</div>
					<Chatroom profileImg={TempImg} />
				</>
			}
		</div>
	);
};

export default Component;