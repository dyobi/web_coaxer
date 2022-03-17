import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Maps from 'google-map-react';
import $ from 'jquery';

import Marker from './marker';
import Profile from '../../util/pullUser';
import Interceptor from '../../util/interceptor';
import { GMAPS_API } from '../../../constants';
import { getIdealUsers } from '../../../datas';

import './index.css';

const Component = () => {

	const _user = useSelector(state => state.user);
	const [index, setIndex] = useState(-1);
	const [idealUsers, setIdealUsers] = useState({});

	const _handleMarkerInfo = (i, setVal) => {
		setIndex(i);

		if (setVal) {
			$('.pull_user_container').css('flex-basis', '100%');
		} else {
			$('.pull_user_container').css('flex-basis', '0');
		}
	};

	useEffect(() => {
		getIdealUsers(_user.id, res => {
			if (res.status === 200) {
				setIdealUsers(res.obj);
			}
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='lookup_container'>
			{_user.id === -1 || !_user.isComplete ?
				<Interceptor />
				:
				<>
					<Maps
						bootstrapURLKeys={{ key: GMAPS_API }}
						defaultCenter={
							{
								lat: _user.latitude,
								lng: _user.longitude
							}}
						defaultZoom={12}
					>
						{idealUsers.length ?
							idealUsers.map((user, index) =>
								< Marker
									key={index}
									lat={user.latitude}
									lng={user.longitude}
									img={process.env.PUBLIC_URL + `/tmp/${user.pictures[0].name}.${user.pictures[0].type}`}
									click={() => _handleMarkerInfo(index, true)}
								/>
							)
							:
							''
						}
					</Maps>
					<Profile usingFor='lookup' />
				</>
			}
		</div>
	);
};

export default Component;