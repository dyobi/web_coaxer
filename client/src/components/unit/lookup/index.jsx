import { useEffect } from 'react';
import $ from 'jquery';
import Maps from 'google-map-react';

import Marker from './marker';
import Profile from '../../util/pullUser';
import { GMAPS_API } from '../../../constants';

import './index.css';



import TempImg1 from '../../../assets/images/1.jpg';


const Component = () => {

	const _handleMarkerInfo = (setVal) => {
		if (setVal) {
			$('.pull_user_container').css('flex-basis', '100%');
		} else {
			$('.pull_user_container').css('flex-basis', '0');
		}
	};

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
			<Profile usingFor='lookup' />
		</div>
	);
};

export default Component;