import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery';
import { BiPlusCircle, BiXCircle } from 'react-icons/bi';

import ErrorAlert from '../../../../util/errorAlert';

import { getPicture, postPicture, deletePicture } from '../../../../../datas';
import { user_pictures } from '../../../../../store/actions';

const Component = () => {

	const _ui = useSelector(state => state.ui);
	const _user = useSelector(state => state.user);
	const [alertView, setAlertView] = useState(false);
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
							setAlertView(!alertView);
						}
					})
				} else {
					setAlertView(!alertView);
				}
			});
		}
	};

	const _handlePicDel = (e, i, name) => {
		e.stopPropagation();

		deletePicture(name, res => {
			if (res.status === 200) {
				const pictures = _user.pictures;
				pictures.splice(i, 1);

				dispatch(user_pictures(pictures));
			} else {
				setAlertView(!alertView);
			}
		});
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
		<>
			<div className='section_wide'>
				<div className='section_wide_head'>
					{_ui.lang === 'en_US' ?
						<span>Picture</span>
						:
						<span>사진</span>
					}
				</div>
				<div className='picture_container'>
					{_user.pictures ?
						_user.pictures.map((pic, index) =>
							<div className='picture_each' key={index}>
								<img src={process.env.PUBLIC_URL + `/tmp/${pic.name}.${pic.type}`} alt='' />
								<BiXCircle className='delete_btn' onClick={(e) => _handlePicDel(e, index, pic.name)} />
							</div>
						)
						:
						''
					}
					<div className='picture_add' onClick={(e) => _handlePicChoose(e)}>
						<BiPlusCircle className='add_btn' />
						<input id='input_pic' type={'file'} accept='image/*' onChange={(e) => _handlePicAdd(e)} style={{ display: 'none' }} />
					</div>
				</div>
			</div>
			<ErrorAlert alertView={alertView} setAlertView={() => setAlertView()} />
		</>
	);
};

export default Component;