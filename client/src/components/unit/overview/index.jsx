import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Interceptor from '../../util/interceptor';
import { getHookupOverview } from '../../../datas';

import './index.css';

import Temp from '../../../assets/images/1.jpg';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);

	useEffect(() => {
		if (_user.id !== -1) {
			getHookupOverview(_user.id, res => {
				if (res.status === 200) {
					console.log(res.obj);
				} else {

				}
			})
		}
	}, [_user.id]);

	return (
		<div className='overview_container'>
			{_user.id === -1 || !_user.isComplete ?
				<Interceptor />
				:
				<>
					<div className='overview_each' style={{ backgroundColor: 'var(--color-10)' }}>
						{_ui.lang === 'en_US' ?
							<h3>Who Liked Me Recently ?</h3>
							:
							<h3>최근 내가 관심있는 사람 ?</h3>
						}
						<div className='section_divider' />
						<div className='overview_content'>
							<div className='overview_user'>
								<img src={Temp} alt='' />
								<span>hello</span>
							</div>
							{_ui.lang === 'en_US' ?
								<h4>Can't find your ideal partner yet?</h4>
								:
								<h4>아직 마음에 드는 사람을 못찾으셨나요?</h4>
							}
						</div>
					</div>
					<div className='overview_each' style={{ backgroundColor: '#FAFAFA' }}>
						{_ui.lang === 'en_US' ?
							<h3>Whom I Liked Recently ?</h3>
							:
							<h3>최근 나에게 관심있는 사람 ?</h3>
						}
						<div className='section_divider' />
						<div className='overview_content'>
							<div className='overview_user'>
								<img src={Temp} alt='' />
								<span>hello</span>
							</div>
							{_ui.lang === 'en_US' ?
								<h4>Sorry, currently no one exists yet.</h4>
								:
								<h4>남들의 이목을 끌 수 있는 사진을 올려볼까요?</h4>
							}
						</div>
					</div>
					<div className='overview_each' style={{ backgroundColor: 'var(--color-10)' }}>
						{_ui.lang === 'en_US' ?
							<h3>We Just Got Matched !</h3>
							:
							<h3>나와 매치된 사람 !</h3>
						}
						<div className='section_divider' />
						<div className='overview_content'>
							<div className='overview_user'>
								<img src={Temp} alt='' />
								<span>hello</span>
							</div>
							{_ui.lang === 'en_US' ?
								<h4>There is none yet. Go get your one!</h4>
								:
								<h4>매칭된 사람이 아직 없어요. 하지만 좌절하진 마세요 )</h4>
							}
						</div>
					</div>
					<div className='overview_each' style={{ backgroundColor: '#FAFAFA' }}>
						{_ui.lang === 'en_US' ?
							<h3>Logs</h3>
							:
							<h3>로그 기록</h3>
						}
						<div className='section_divider' />
						<div className='log_content'>
							<h4>2000 - 201- - mac goa</h4>
							<h4>2000 - 201- - mac goa</h4>
							<h4>2000 - 201- - mac goa</h4>
							<h4>2000 - 201- - mac goa</h4>
							<h4>2000 - 201- - mac goa</h4>
							<h4>2000 - 201- - mac goa</h4>
							<h4>2000 - 201- - mac goa</h4>
							<h4>2000 - 201- - mac goa</h4>
							<h4>2000 - 201- - mac goa</h4>
							<h4>2000 - 201- - mac goa</h4>
						</div>
					</div>
				</>
			}
		</div>
	);
};

export default Component;