import ReactDom from 'react-dom';

import './index.css';

const Component = ({ show, close }) => {
	return ReactDom.createPortal(
		<div className={`modal_container ${show ? 'show' : ''}`} onClick={() => close()}>
			<div className="modal" onClick={(e) => e.stopPropagation()}>
				<button onClick={() => close()}>close</button>
			</div>
		</div>,
		document.getElementById('root_modal_account')
	);
};

export default Component;