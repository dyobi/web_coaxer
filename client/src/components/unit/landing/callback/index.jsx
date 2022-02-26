import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import { requestGoogleCode } from '../../../../datas';

import './index.css';

const Component = () => {

	const { source } = useParams();
	const location = useLocation().search;

	const _ui = useSelector(state => state.ui);

	useEffect(() => {
		if (location !== undefined) {
			const code = new URLSearchParams(location).get('code');
			let codeFunc;

			if (source === 'google') codeFunc = requestGoogleCode;
			// else if (source === 'facebook') codeFunc = requestFacebookCode;
			// else if (source === '42') codeFunc = request42Code;

			codeFunc(code, res => {
				const token = res.token;
			})
		}
	}, [location, source]);

	return (
		<div className='oauth_callback_container'>
			callback page!!!
		</div>
	);
};

export default Component;