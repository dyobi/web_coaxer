import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Interceptor from '../../util/interceptor';
import ErrorAlert from '../../util/errorAlert';
import { getHookupOverview, getLog } from '../../../datas';

import './index.css';

const Overview = ({ type, enTitle, krTitle, enDesc, krDesc, bgc, obj }) => {

	const _ui = useSelector(state => state.ui);

	return (
		<>
			{obj ?
				<div className='overview_each' style={{ backgroundColor: `${bgc}` }}>
					{_ui.lang === 'en_US' ?
						<h3>{enTitle}</h3>
						:
						<h3>{krTitle}</h3>
					}
					<div className='section_divider' />
					{type === 'overview' ?
						<div className='overview_content'>
							{obj.length > 0 ?
								obj.slice(0, 5).reverse().map((user, idx) =>
									<div className='overview_user' key={idx}>
										{user.pictures.length > 0 ?
											<img
												src={process.env.PUBLIC_URL + `/tmp/${user.pictures[0].name}.${user.pictures[0].type}`}
												alt=''
											/>
											:
											''
										}
										{_ui.lang === 'en_US' ?
											<span>{user.firstName} {user.lastName}</span>
											:
											<span>{user.lastName} {user.firstName}</span>
										}
									</div>
								)
								:
								_ui.lang === 'en_US' ?
									<h4>{enDesc}</h4>
									:
									<h4>{krDesc}</h4>
							}
						</div>
						:
						<div className='log_content'>
							{obj.length > 0 ?
								obj.map((log, idx) =>
									<h4 key={idx}>[{log.deviceType}] {log.info} - {log.logDate.replace('T', ' ')}</h4>
								)
								:
								''
							}
						</div>
					}
				</div>
				:
				''
			}
		</>
	);
}

const Component = () => {

	const _user = useSelector(state => state.user);
	const [alertView, setAlertView] = useState(false);
	const [overview, setOverview] = useState({});
	const [log, setLog] = useState({});

	useEffect(() => {
		if (_user.id !== -1) {
			getHookupOverview(_user.id, res => {
				if (res.status === 200) {
					setOverview(res.obj);
				} else {
					setAlertView(!alertView);
				}
			});
			getLog(_user.id, res => {
				if (res.status === 200) {
					setLog(res.obj);
				} else {
					setAlertView(!alertView);
				}
			});
		}
	}, [_user.id, alertView]);

	return (
		<>
			<div className='overview_container'>
				{_user.id === -1 || !_user.isComplete ?
					<Interceptor />
					:
					<>
						<Overview
							type={'overview'}
							enTitle={'Who Liked Me Recently ?'}
							krTitle={'?????? ????????? ?????? ?????? ?????? ?'}
							enDesc={'Can\'t find your ideal partner yet?'}
							krDesc={'?????? ????????? ?????? ????????? ???????????????????'}
							bgc={'var(--color-10)'}
							obj={overview.fromOther}
						/>
						<Overview
							type={'overview'}
							enTitle={'Whom I Liked Recently ?'}
							krTitle={'?????? ?????? ????????? ?????? ?'}
							enDesc={'Sorry, currently no one exists yet.'}
							krDesc={'????????? ????????? ??? ??? ?????? ????????? ????????????????'}
							bgc={'#FAFAFA'}
							obj={overview.fromMe}
						/>
						<Overview
							type={'overview'}
							enTitle={'We Just Got Matched !'}
							krTitle={'?????? ????????? ?????? !'}
							enDesc={'There is none yet. Go get your one!'}
							krDesc={'????????? ????????? ?????? ?????????. ????????? ???????????? ????????? )'}
							bgc={'var(--color-10)'}
							obj={overview.matched}
						/>
						<Overview
							type={'logs'}
							enTitle={'Logs'}
							krTitle={'?????? ??????'}
							enDesc={''}
							krDesc={''}
							bgc={'#FAFAFA'}
							obj={log}
						/>
					</>
				}
			</div>
			<ErrorAlert alertView={alertView} setAlertView={() => setAlertView()} />
		</>
	);
};

export default Component;