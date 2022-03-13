import { useSelector } from 'react-redux';
import ReactDom from 'react-dom';
import { GiHeartBeats } from 'react-icons/gi';

import './index.css';

const Component = ({ show, setShow, type, enDesc, krDesc, cb1, cb2 }) => {

	const _ui = useSelector(state => state.ui);

	const _handleView = (cb) => {
		setShow(false);
		cb();
	};

	return ReactDom.createPortal(
		<div
			className={`alert_container ${show ? 'show' : ''}`}
			onClick={() => type === 'confirm' ? _handleView(cb1) : _handleView(cb2)}
		>
			<div className='alert' onClick={(e) => e.stopPropagation()}>
				<GiHeartBeats className='logo_icon' />
				<h3>{_ui.lang === 'en_US' ? 'Coaxer' : '콕서'}</h3>
				<span>
					{_ui.lang === 'en_US' ?
						<>{enDesc}</>
						:
						<>{krDesc}</>
					}
				</span>
				<hr />
				<div className='alert_btn_container'>
					{type === 'question' ?
						<>
							<div className='alert_btn' onClick={() => _handleView(cb1)}>
								{_ui.lang === 'en_US' ? 'YES' : '확인'}
							</div>
							<div className='alert_btn' onClick={() => _handleView(cb2)}>
								{_ui.lang === 'en_US' ? 'NO' : '취소'}
							</div>
						</>
						:
						<div className='alert_btn' onClick={() => _handleView(cb1)}>
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