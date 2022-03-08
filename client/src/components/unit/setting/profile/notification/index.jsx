import { useSelector } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';

const Component = () => {

	const _ui = useSelector(state => state.ui);

	const _handleNotification = (e) => {
		e.preventDefault();
		const notification = document.querySelector(`input[name='notification']:checked`).value;
		console.log(notification);
	};

	return (
		<div className='section'>
			{_ui.lang === 'en_US' ?
				<span>Notification</span>
				:
				<span>알림</span>
			}
			<div className='radio_container'>
				<div className='radio_section'>
					{_ui.lang === 'en_US' ?
						<span>On</span>
						:
						<span>켜짐</span>
					}
					<input type={'radio'} name='notification' value='1' defaultChecked />
				</div>
				<div className='radio_section'>
					{_ui.lang === 'en_US' ?
						<span>Off</span>
						:
						<span>꺼짐</span>
					}
					<input type={'radio'} name='notification' value='0' />
				</div>
			</div>
			<BiCheckSquare className='check_btn' onClick={(e) => _handleNotification(e)} />
		</div>
	);
};

export default Component;