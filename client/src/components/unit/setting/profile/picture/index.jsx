import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery';
import { BiPlusCircle } from 'react-icons/bi';

import { getPicture, postPicture } from '../../../../../datas';
import { user_pictures } from '../../../../../store/actions';

import Temp from '../../../../../assets/images/1.jpg';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const _handlePicChoose = (e) => {
		e.stopPropagation();

		document.getElementById('input_pic').click();
	};

	const _handlePicAdd = (e) => {
		e.stopPropagation();

		if (e.target.files) {
			const picture = e.target.files[0];
			const formData = new FormData();

			formData.append('id', _user.id);
			formData.append('picture', picture);

			e.target.value = '';

			postPicture(formData, res => {
				if (res.status === 200) {
					getPicture(_user.id, res => {
						if (res.status === 200) {
							dispatch(user_pictures(res.obj));
						} else {
							console.log('handle error');
						}
					})
				} else {
					console.log('handle error');
				}
			})
		}
	};

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
				<img src={Temp} alt='' />
				<img src={Temp} alt='' />
				<div className='picture_add' onClick={(e) => _handlePicChoose(e)}>
					<BiPlusCircle className='add_btn' />
					<input id='input_pic' type={'file'} accept='image/*' onChange={(e) => _handlePicAdd(e)} style={{ display: 'none' }} />
				</div>
			</div>
		</div>
	);
};

export default Component;