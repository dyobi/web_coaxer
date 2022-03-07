import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import $ from 'jquery';
import Maps from 'google-map-react';
import { BiChevronRightCircle, BiHeartCircle } from 'react-icons/bi';

import Marker from './marker';
import { GMAPS_API } from '../../../constants';

import TempImg1 from '../../../assets/images/1.jpg';
import TempImg2 from '../../../assets/images/2.jpg';
import TempImg3 from '../../../assets/images/main.jpg';

import './index.css';

const Component = () => {

	const _ui = useSelector(state => state.ui);

	const _handleMarkerInfo = (setVal) => {
		if (setVal) {
			$('.marker_info_container').css('flex-basis', '100%');
		} else {
			$('.marker_info_container').css('flex-basis', '0');
			document.querySelector('.info_pictures_container').scrollLeft = 0;
		}
	};

	const _handleLikes = () => {
		console.log('Liked');
	};

	$(() => {

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

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(position => {
			console.log("Latitude is :", position.coords.latitude);
			console.log("Longitude is :", position.coords.longitude);
		});
	}, []);

	return (
		<div className='lookup_container'>
			<Maps
				bootstrapURLKeys={{ key: GMAPS_API }}
				defaultCenter={
					{
						lat: 37.4543478,
						lng: 127.1498133
					}}
				defaultZoom={12}
				onChildMouseUp={() => _handleMarkerInfo(true)}
			>
				{/* ----------------------- MARKER MAP ----------------------- */}
				<Marker
					lat={37.4543478}
					lng={127.1498133}
					img={TempImg1}
				/>
			</Maps>
			<div className='marker_info_container'>
				<div className='info_title'>
					<BiChevronRightCircle
						className='back_btn'
						onClick={() => _handleMarkerInfo(false)}
					/>
					<div className='info_username'>Luke Kim</div>
					<BiHeartCircle
						className='like_btn'
						style={{ color: `${false ? '#D2042D' : '#D4D4D4'}` }}
						onClick={() => _handleLikes()}
					/>
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
		</div>
	);
};

export default Component;