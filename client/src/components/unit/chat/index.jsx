import $ from 'jquery';
import { BiChevronRightCircle, BiSend } from 'react-icons/bi';

import './index.css';

const Component = () => {

	const _inputFocus = (status) => {
		if (status) {
			$('.chat_input_container').css('box-shadow', '0 0 0 2px var(--color-80) inset');
		} else {
			$('.chat_input_container').css('box-shadow', 'none');
		}
	};

	const _handleChatroom = (setVal) => {
		if (setVal) {
			$('.chat_list').css('width', '60%');
			$('.chatroom').css('flex-basis', '100%');
		} else {
			$('.chat_list').css('width', '100%');
			$('.chatroom').css('flex-basis', '0');
		}
	};

	const _sendChat = (e) => {
		e.preventDefault();
		const content = $('textarea');
		console.log(content.val());
		content.val('');
	}

	$(() => {
		$('textarea').on('keydown', e => {
			if (e.key === 'Enter' && !e.shiftKey) {
				_sendChat(e);
			}
		});
	});

	return (
		<div className='chat_container'>
			<div className='chat_list' onClick={() => _handleChatroom(true)} />
			<div className='chatroom'>
				<div className='chatroom_title'>
					<BiChevronRightCircle
						className='back_btn'
						onClick={() => _handleChatroom(false)}
					/>
					<div className='chatroom_name'>Luke Kim</div>
				</div>
				<div className='chats'></div>
				<div className='chat_input_container'>
					<textarea className='chat_input' onFocus={() => _inputFocus(true)} onBlur={() => _inputFocus(false)} />
					<div className='send_container'>
						<BiSend className='send_btn' onClick={(e) => _sendChat(e)}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Component;