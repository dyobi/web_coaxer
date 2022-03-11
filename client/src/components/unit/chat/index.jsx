import { BsXCircle } from 'react-icons/bs';
import $ from 'jquery';

import Chatroom from './chatroom';

import './index.css';

import TempImg from '../../../assets/images/1.jpg';

const Component = () => {

	const _handleChatroom = (setVal) => {
		if (setVal) {
			$('.chat_list').css('width', '60%');
			$('.chat_list_each').css('width', 'calc(100% - 10px)');
			$('.chatroom').css('flex-basis', '100%');
		} else {
			$('.chat_list').css('width', '100%');
			$('.chat_list_each').css('width', 'calc(100% - 200px)');
			$('.chatroom').css('flex-basis', '0');
		}
	};

	$(() => {

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

	});

	return (
		<div className='chat_container'>
			<div className='chat_list' onClick={() => _handleChatroom(true)}>
				<div className='chat_list_each'>
					<img src={TempImg} alt='' />
					<div className='chat_thumbnail_container'>
						<p>Luke Kim</p>
						<span>hello hello hello hello hello hello hello hello</span>
					</div>
					<div className='chat_delete_container'><BsXCircle className='chat_delete_btn' /></div>
				</div>
				<div className='chat_list_each'>
					<img src={TempImg} alt='' />
				</div>
				<div className='chat_list_each'>
					<img src={TempImg} alt='' />
				</div>
				<div className='chat_list_each'>
					<img src={TempImg} alt='' />
				</div>
				<div className='chat_list_each'>
					<img src={TempImg} alt='' />
				</div>
				<div className='chat_list_each'>
					<img src={TempImg} alt='' />
				</div>
				<div className='chat_list_each'>
					<img src={TempImg} alt='' />
				</div>
				<div className='chat_list_each'>
					<img src={TempImg} alt='' />
				</div>
				
			</div>
			<Chatroom profileImg={TempImg} />
		</div>
	);
};

export default Component;