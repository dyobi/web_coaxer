import { useSelector } from 'react-redux';
import $ from 'jquery';

const Component = () => {

	const _ui = useSelector(state => state.ui);

	$(() => {

		const slider = document.querySelector('.picture_container');
		let isDown = false;
		let startX;
		let scrollLeft;

		slider.addEventListener('mousedown', (e) => {
			isDown = true;
			slider.classList.add('active');
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		});

		slider.addEventListener('mouseleave', () => {
			isDown = false;
			slider.classList.remove('active');
		});

		slider.addEventListener('mouseup', () => {
			isDown = false;
			slider.classList.remove('active');
		});

		slider.addEventListener('mousemove', (e) => {
			e.preventDefault();
			if (!isDown) return;
			const x = e.pageX - slider.offsetLeft;
			const walk = (x - startX) * 1.2;
			slider.scrollLeft = scrollLeft - walk;
		});

	});

	return (
		<div className='section_wide'>
			<div className='section_wide_head'>
				{_ui.lang === 'en_US' ?
					<span>Picture</span>
					:
					<span>사진</span>
				}
			</div>
			<div className='picture_container'>
				{/* pics */}
			</div>
		</div>
	);
};

export default Component;