import { useEffect } from 'react';
import Maps from 'google-map-react';
import $ from 'jquery';
import { BiChevronRightCircle, BiHeartCircle } from 'react-icons/bi';

import Marker from './marker';
import { GMAPS_API } from '../../../constants';

import TempImg from '../../../assets/icons/en_US.png';

import './index.css';

const Component = () => {

	const _handleMarkerInfo = (setVal) => {
		if (setVal) {
			$('.marker_info_container').css('flex-basis', '100%');
		} else {
			$('.marker_info_container').css('flex-basis', '0');
		}
	};

	const _handleLikes = () => {
		console.log('Liked');
	}

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
				<Marker
					lat={37.4543478}
					lng={127.1498133}
					img={TempImg}
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
						style={{ color: '#D2042D' }}
						onClick={() => _handleLikes()}
					/>
				</div>
				<hr style={{ width: 'calc(100% - 30px)', margin: '0', padding: '0' }} />
			</div>
		</div>
	);
};

export default Component;