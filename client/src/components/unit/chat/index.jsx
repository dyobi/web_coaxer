import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiXCircle } from 'react-icons/bi';
import $ from 'jquery';

import Chatroom from './chatroom';
import Profile from '../../util/pullUser';
import Interceptor from '../../util/interceptor';
import ErrorAlert from '../../util/errorAlert';
import { getChatroom, deleteMessage } from '../../../datas';
import { user_chat } from '../../../store/actions';
import { stomp } from '../../app';

import './index.css';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const [profile, setProfile] = useState(undefined);
	const [chatIdx, setChatIdx] = useState(-1);
	const [alertView, setAlertView] = useState(false);

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
			}
		}, 100);
	};

	const _handleViewProfile = (e, setVal) => {
		e.stopPropagation();

		setTimeout(() => {
			if (setVal) {
				$('.chat_list').css('flex-basis', '0');
				$('.pull_user_container').css('flex-basis', '100%');
			} else {
				$('.chat_list').css('flex-basis', '100%');
				$('.pull_user_container').css('flex-basis', '0');
			}
		}, 100);
	};

	const _handleDeleteChat = (chat, idx, e) => {
		e.stopPropagation();

		deleteMessage(_user.id, chat.id, res => {
			if (res.status === 200) {
				let appendedChat = _user.chat;

				appendedChat[idx].messages = [];
				dispatch(user_chat(appendedChat));
			} else {
				setAlertView(!alertView);
			}
		});
	};

	const showChat = (msg, chat) => {

		let appendedChat = chat;

		for (let i = 0; i < appendedChat.length; i++) {
			if (appendedChat[i].id === msg.roomId) {
				if (appendedChat[i].messages.length > 0) {
					appendedChat[i].messages.push({
						id: appendedChat[i].messages[appendedChat[i].messages.length - 1].id + 1,
						sender: { id: msg.sender },
						content: msg.content,
						sendDate: new Date().toISOString().slice(0, 19)
					});
					break;
				} else {
					appendedChat[i].messages = [{
						id: 0,
						sender: { id: msg.sender },
						content: msg.content,
						sendDate: new Date().toISOString().slice(0, 19)
					}]
				}
			}
		};

		setTimeout(() => {
			$('.chats').animate({ scrollTop: $('.chats')[0].scrollHeight }, 'slow');
		}, 200);

		dispatch(user_chat(appendedChat));

	};

	$(() => {
		if (_user.isComplete && profile !== undefined) {
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

	useEffect(() => {
		if (_user.id !== -1) {
			getChatroom(_user.id, res => {
				if (res.status === 200) {
					dispatch(user_chat(res.obj));
					if (stomp !== undefined) {
						for (let i = 0; i < res.obj.length; i++) {
							if (stomp._stompHandler._subscriptions[res.obj[i].id] === undefined) {
								stomp.subscribe(`/room/${res.obj[i].id}`, (msg) => {
									showChat(JSON.parse(msg.body), res.obj);
								}, { id: res.obj[i].id });
							}
						}
					}
				} else {
					setAlertView(!alertView);
				}
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [_user.id]);

	return (
		<>
			<div className='chat_container'>
				{_user.id === -1 || !_user.isComplete ?
					<Interceptor />
					:
					<>
						<Profile
							usingFor='chat'
							user={profile}
						/>
						<div className='chat_list'>
							{_user.chat.length > 0 ?
								_user.chat.map((chat, idx) => {

									let user = chat.user1.id === _user.id ? chat.user2 : chat.user1;
									let message = chat.messages;

									return (
										<div className='chat_list_each'
											key={idx}
											onClick={async (e) => {
												await setChatIdx(idx);
												_handleChatroom(true);
											}}
										>
											{user.pictures.length > 0 ?
												<img
													src={process.env.PUBLIC_URL + `/tmp/${user.pictures[0].name}.${user.pictures[0].type}`}
													alt=''
													onClick={async (e) => {
														e.stopPropagation();
														await setProfile(user);
														_handleViewProfile(e, true);
													}}
												/>
												:
												''
											}
											<div className='chat_thumbnail_container'>
												{_ui.lang === 'en_US' ?
													<p>{user.firstName} {user.lastName}</p>
													:
													<p>{user.lastName} {user.firstName}</p>
												}
												{chat.messages.length > 0 ?
													<span>{message[message.length - 1].content}</span>
													:
													''
												}
											</div>
											<div className='chat_delete_container'>
												<BiXCircle
													className='chat_delete_btn'
													onClick={(e) => _handleDeleteChat(chat, idx, e)}
												/>
											</div>
										</div>
									);
								})
								:
								_ui.lang === 'en_US' ?
									<h3>There is no chatroom yet.</h3>
									:
									<h3>개설된 채팅방이 아직 없습니다.</h3>
							}
						</div>
						<Chatroom index={chatIdx} />
					</>
				}
			</div>
			<ErrorAlert alertView={alertView} setAlertView={() => setAlertView()} />
		</>
	);
};

export default Component;