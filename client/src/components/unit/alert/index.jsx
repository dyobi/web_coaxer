import { useSelector } from 'react-redux';
import ReactDom from 'react-dom';
import { GiHeartBeats } from 'react-icons/gi';

import './index.css';

const Component = (props) => {

	const _ui = useSelector(state => state.ui);

	const _handleView = (cb) => {
		props.setShow(false);
		cb();
	};

	return ReactDom.createPortal(
		<div
			className={`alert_container ${props.show ? 'show' : ''}`}
			onClick={() => props.type === 'confirm' ? _handleView(props.cb1) : _handleView(props.cb2)}
		>
			<div className='alert' onClick={(e) => e.stopPropagation()}>
				{props.img === undefined || props.img === null ?
					<>
						<GiHeartBeats className='logo_icon' />
						<h3>{_ui.lang === 'en_US' ? 'Coaxer' : '콕서'}</h3>
						<span>
							{_ui.lang === 'en_US' ?
								<>{props.enDesc}</>
								:
								<>{props.krDesc}</>
							}
						</span>
					</>
					:
					<img src={process.env.PUBLIC_URL + `/tmp/${props.img.name}.${props.img.type}`} alt='' />
				}
				<hr />
				<div className='alert_btn_container'>
					{props.type === 'question' ?
						<>
							<div className='alert_btn' onClick={() => _handleView(props.cb1)}>
								{_ui.lang === 'en_US' ? 'YES' : '확인'}
							</div>
							<div className='alert_btn' onClick={() => _handleView(props.cb2)}>
								{_ui.lang === 'en_US' ? 'NO' : '취소'}
							</div>
						</>
						:
						<div className='alert_btn' onClick={() => _handleView(props.cb1)}>
							{_ui.lang === 'en_US' ? 'Confirm' : '확인'}
						</div>
					}
				</div>
			</div>
		</div>,
		document.getElementById('root_modal_alert')
	);
};

export default Component;