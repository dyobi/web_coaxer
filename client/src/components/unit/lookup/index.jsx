import { useEffect } from 'react';
import Maps from 'google-map-react';

import Marker from './marker';
import { GMAPS_API } from '../../../constants';

import TempImg from '../../../assets/icons/en_US.png';

import './index.css';

const Component = () => {

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(position => {
			console.log("Latitude is :", position.coords.latitude);
			console.log("Longitude is :", position.coords.longitude);
		});
	});

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
			>
				<Marker
					lat={37.4543478}
					lng={127.1498133}
					img={TempImg}
				/>
			</Maps>
		</div>
	);
};

export default Component;