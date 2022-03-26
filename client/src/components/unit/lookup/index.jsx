import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Maps from 'google-map-react';
import $ from 'jquery';

import Marker from './marker';
import Profile from '../../util/pullUser';
import Interceptor from '../../util/interceptor';
import ErrorAlert from '../../util/errorAlert';
import { GMAPS_API } from '../../../constants';
import { getIdealUsers } from '../../../datas';

import { postHookup } from '../../../datas';

import './index.css';

const Component = () => {

	const _user = useSelector(state => state.user);
	const [index, setIndex] = useState(-1);
	const [idealUsers, setIdealUsers] = useState({});
	const [alertView, setAlertView] = useState(false);

	const _handleLikes = (e) => {
		e.preventDefault();

		postHookup(_user.id, idealUsers[index].id, res => {
			if (res.status === 200) {
				let splicedIdealUsers = idealUsers;

				$('.pull_user_container').css('flex-basis', '0');
				setTimeout(() => {
					splicedIdealUsers.splice(index, 1);

					setIndex(-1);
					setIdealUsers(splicedIdealUsers);
				}, 300);
			} else {
				setAlertView(!alertView);
			}
		});
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
		<>
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
								idealUsers.map((user, idx) =>
									<Marker
										key={idx}
										lat={user.latitude}
										lng={user.longitude}
										img={process.env.PUBLIC_URL + `/tmp/${user.pictures[0].name}.${user.pictures[0].type}`}
										click={async () => {
											await setIndex(idx);
											$('.pull_user_container').css('flex-basis', '100%');
										}}
									/>
								)
								:
								''
							}
						</Maps>
						<Profile usingFor='lookup' user={idealUsers[index]} _handleLikes={(e) => _handleLikes(e)} />
					</>
				}
			</div>
			<ErrorAlert alertView={alertView} setAlertView={() => setAlertView()} />
		</>
	);
};

export default Component;