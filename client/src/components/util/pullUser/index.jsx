import { useSelector } from 'react-redux';
import $ from 'jquery';
import { BiChevronRightCircle, BiChevronLeftCircle, BiHeartCircle, BiBlock } from 'react-icons/bi';

import './index.css';



import TempImg1 from '../../../assets/images/1.jpg';
import TempImg2 from '../../../assets/images/2.jpg';
import TempImg3 from '../../../assets/images/main.jpg';

const Component = ({ usingFor }) => {

	const _ui = useSelector(state => state.ui);

	const _handleLikes = () => {
		console.log('Liked');
	};

	const _handleMarkerInfo = (setVal) => {
		if (setVal) {
			$('.pull_user_container').css('flex-basis', '100%');
			if (usingFor === 'chat') $('.chat_list').css('flex-basis', '0');
		} else {
			$('.pull_user_container').css('flex-basis', '0');
			if (usingFor === 'chat') $('.chat_list').css('flex-basis', '100%');
		}
	};

	$(() => {

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

	});

	return (
		<div className={`pull_user_container ${usingFor === 'lookup' ? 'for_lookup' : 'for_chat'}`}>
			<div className='info_title'>
				{usingFor === 'lookup' ?
					<>
						<BiChevronRightCircle
							className='back_btn'
							onClick={() => _handleMarkerInfo(false)}
						/>
						<div className='info_username'>Luke Kim</div>
						<BiHeartCircle
							className='right_btn for_lookup'
							style={{ color: `${false ? '#D2042D' : '#D4D4D4'}` }}
							onClick={() => _handleLikes()}
						/>
					</>
					:
					<>
						<BiChevronLeftCircle
							className='back_btn'
							onClick={() => _handleMarkerInfo(false)}
						/>
						<div className='info_username'>Luke Kim</div>
						<BiBlock className='right_btn for_chat' />
					</>
				}

			</div>
			<hr style={{ width: 'calc(100% - 30px)', margin: '0', padding: '0' }} />
			<div className='info_pictures_container'>
				{/* ----------------------- IMG MAP ----------------------- */}
				<img src={TempImg1} onClick={() => console.log('hihi')} alt='' />
				<img src={TempImg2} alt='' />
				<img src={TempImg3} alt='' />
				<img src={TempImg1} alt='' />
				<img src={TempImg2} alt='' />
			</div>
			<div className='information_container'>
				<hr style={{ width: '100%', margin: '0', padding: '0' }} />
				{_ui.lang === 'en_US' ?
					<>
						<p>Distance</p>
						{/* ----------------------- distance ----------------------- */}
						<span>1.6 miles away</span>
						<hr style={{ width: '100%', margin: '0', padding: '0' }} />
						<p>Age</p>
						{/* ----------------------- DOB ----------------------- */}
						<span>1992.11.11 / 31</span>
						<hr style={{ width: '100%', margin: '0', padding: '0' }} />
						<p>Bio</p>
					</>
					:
					<>
						<p>나와의 거리</p>
						{/* ----------------------- distance ----------------------- */}
						<span>1.6 km 떨어짐</span>
						<hr style={{ width: '100%', margin: '0', padding: '0' }} />
						<p>나이</p>
						{/* ----------------------- DOB ----------------------- */}
						<span>1992.11.11 / 31</span>
						<hr style={{ width: '100%', margin: '0', padding: '0' }} />
						<p>자기 소개</p>
					</>
				}
				{/* ----------------------- BIO ----------------------- */}
				<span>Hello, my name is luke kim. Nice to meet you. I'd like to meet new ppl and like hanging out. Hello, my name is luke kim. Nice to meet you. I'd like to meet new ppl and like hanging out. Hello, my name is luke kim. Nice to meet you. I'd like to meet new ppl and </span>
			</div>
		</div>
	);
};

export default Component;