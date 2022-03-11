import $ from 'jquery';
import { BiChevronRightCircle, BiSend } from 'react-icons/bi';

import '../index.css';

const Component = ({ profileImg }) => {

	const _inputFocus = (status) => {
		if (status) {
			$('.chat_input_container').css('box-shadow', '0 0 4px var(--color-40), 0 0 0 2px var(--color-80) inset');
		} else {
			$('.chat_input_container').css('box-shadow', '0 0 4px var(--color-40)');
		}
	};

	const _sendChat = (e) => {
		e.preventDefault();

		const content = $('textarea');
		const _blank = /^\s+|\s+$/g;

		if (content.val().replace(_blank, '') !== '') {
			console.log(content.val());
			content.val('');
		}
	}

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

		$('.chats').scrollTop($('.chats').height());

		$('textarea').on('keydown', e => {
			if (e.key === 'Enter' && !e.shiftKey) {
				_sendChat(e);
			}
		});

		const slider = document.querySelector('.chats');
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
		<div className='chatroom'>
			<div className='chatroom_title'>
				<BiChevronRightCircle
					className='back_btn'
					onClick={() => _handleChatroom(false)}
				/>
				<div className='chatroom_name'>Luke Kim</div>
			</div>
			<div className='chats'>
				{/* CHAT MAP */}
				<div className='from_me'><div>Hello </div></div>
				<div className='from_you_container'>
					<img src={profileImg} alt='' />
					<div className='from_you'>hello</div>
				</div>
				<div className='from_me'>h</div>
				<div className='from_you_container'>
					<img src={profileImg} alt='' />
					<div className='from_you'>HFDIdfsa</div>
				</div>
				<div className='from_me'>!world my name is Luke. Nice to meet you !Hello world my name is Luke. Nice to meet you !Hello world my name is Luke. Nice to meet you </div>
				<div className='from_you_container'>
					<img src={profileImg} alt='' />
					<div className='from_you'>!world my name is Luke. Nice to meet you !Hello world my name is Luke. Nice to meet you !Hello world my name is Luke. Nice to meet you !world my name is Luke. Nice to meet you !Hello world my name is Luke. Nice to meet you !Hello world my name is Luke. Nice to meet you </div>
				</div>
			</div>
			<div className='chat_input_container'>
				<textarea className='chat_input' onFocus={() => _inputFocus(true)} onBlur={() => _inputFocus(false)} />
				<div className='send_container'>
					<BiSend className='send_btn' onClick={(e) => _sendChat(e)} />
				</div>
			</div>
		</div>
	);
};

export default Component;