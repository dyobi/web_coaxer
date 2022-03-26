import { useEffect } from 'react';
import $ from 'jquery';
import { BiCheck } from 'react-icons/bi';

const Component = ({ onClick }) => {

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
			<span>Submit</span>
			<div className='success'>
				<BiCheck className='success_icon' />
			</div>
		</div>
	);
};

export default Component;