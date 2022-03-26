import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import $ from 'jquery';
import { BiChevronRightCircle, BiSend } from 'react-icons/bi';

import { stomp } from '../../../app';

import '../index.css';

const Component = ({ index }) => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);

	let _other;

	if (index !== -1 && _user.chat[index].id !== undefined) {
		_other = _user.chat[index].user1.id === _user.id ? _user.chat[index].user2 : _user.chat[index].user1;
	}

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
			stomp.send('/send/msg', {},
				JSON.stringify({
					'roomId': _user.chat[index].id,
					'sender': _user.id,
					'content': content.val()
				})
			);
			content.val('');
		}

	};;

	const _handleChatroom = (setVal) => {
		setTimeout(() => {
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

				$('.chats').scrollTop($('.chats')[0].scrollHeight);
			}
		}, 100);
	};

	$(() => {

		if (index !== -1 && _other !== undefined) {

			$('.chats').scrollTop($('.chats')[0].scrollHeight);

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
		}

	});

	useEffect(() => {
		if (index !== -1 && _other !== undefined) {
			$('.chats').scrollTop($('.chats')[0].scrollHeight);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [_user.chat, index]);

	return (
		<>
			{index !== -1 && _other !== undefined ?
				<div className='chatroom'>
					<div className='chatroom_title'>
						<BiChevronRightCircle
							className='back_btn'
							onClick={() => _handleChatroom(false)}
						/>
						<div className='chatroom_name'>
							{_ui.lang === 'en_US' ?
								<>{_other.firstName} {_other.lastName}</>
								:
								<>{_other.lastName} {_other.firstName}</>
							}
						</div>
					</div>
					<div className='chats'>
						{_user.chat[index].messages.length > 0 ?
							_user.chat[index].messages.map((msg, idx) =>
								msg.sender.id === _user.id ?
									<div className='from_me' key={idx}>{msg.content}</div>
									:
									<div className='from_you_container' key={idx}>
										{_other.pictures.length > 0 ?
											<img
												src={process.env.PUBLIC_URL + `/tmp/${_other.pictures[0].name}.${_other.pictures[0].type}`}
												alt=''
											/>
											:
											''
										}
										<div className='from_you'>{msg.content}</div>
									</div>
							)
							:
							_ui.lang === 'en_US' ?
								<span>There's no messages yet.</span>
								:
								<span>아직 메세지가 없어요.</span>
						}
					</div>
					<div className='chat_input_container'>
						<textarea className='chat_input' onFocus={() => _inputFocus(true)} onBlur={() => _inputFocus(false)} />
						<div className='send_container' onClick={(e) => _sendChat(e)}>
							<BiSend className='send_btn' />
						</div>
					</div>
				</div>
				:
				''
			}
		</>
	);
};

export default Component;