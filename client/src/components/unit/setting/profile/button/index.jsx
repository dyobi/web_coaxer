import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BiCheck } from 'react-icons/bi';
import $ from 'jquery';

const Component = ({ onClick }) => {

	const _ui = useSelector(state => state.ui);

	useEffect(() => {

		$('.submit_btn').on('click', (e) => {

			$(e.currentTarget).addClass("is_active");

			setTimeout(() => {
				$(e.currentTarget).removeClass('is_active');
			}, 600);

		});

	}, []);

	return (
		<div className='submit_btn' onClick={(e) => onClick(e)}>
			{_ui.lang === 'en_US' ?
				<span>Submit</span>
				:
				<span>확인</span>
			}
			<div className='success'>
				<BiCheck className='success_icon' />
			</div>
		</div>
	);
};

export default Component;