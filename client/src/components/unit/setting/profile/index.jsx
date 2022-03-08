import { useSelector } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';
import $ from 'jquery';

import { Year, Month, Date } from '../util';

import './index.css';

const Component = () => {

	const _ui = useSelector(state => state.ui);

	const _handleLastName = (e) => {
		e.preventDefault();
		const lastName = document.getElementById('lastName').value;
		console.log(lastName);
	};

	const _handleFirstName = (e) => {
		e.preventDefault();
		const firstName = document.getElementById('firstName').value;
		console.log(firstName);
	};

	const _handleDOB = (e) => {
		e.preventDefault();
		const birthYear = document.getElementById('birth_year').value;
		const birthMonth = document.getElementById('birth_month').value;
		const birthDate = document.getElementById('birth_date').value;
		console.log(birthYear + '  /  ' + birthMonth + '  /  ' + birthDate);
	};

	const _handleGender = (e) => {
		e.preventDefault();
		const gender = document.querySelector(`input[name='gender']:checked`).value;
		console.log(gender);
	};

	const _handleNotification = (e) => {
		e.preventDefault();
		const notification = document.querySelector(`input[name='notification']:checked`).value;
		console.log(notification);
	};

	const _handleBio = (e) => {
		e.preventDefault();
		const bio = document.querySelector(`textarea[name='bio']`).value;
		console.log(bio);
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
		<div className='profile_setting_container'>

			{/* TITLE : User Information */}
			<div className='section_title'>
				{_ui.lang === 'en_US' ?
					<span>Basic Information</span>
					:
					<span>기본 정보</span>
				}
			</div>

			{/* Last Name */}
			<div className='section'>
				{_ui.lang === 'en_US' ?
					<span>Last Name</span>
					:
					<span>성</span>
				}
				<input id='lastName' type={'text'} className='input_name' />
				<BiCheckSquare className='check_btn' onClick={(e) => _handleLastName(e)} />
			</div>

			{/* First Name */}
			<div className='section'>
				{_ui.lang === 'en_US' ?
					<span>First Name</span>
					:
					<span>이름</span>
				}
				<input id='firstName' type={'text'} className='input_name' />
				<BiCheckSquare className='check_btn' onClick={(e) => _handleFirstName(e)} />
			</div>

			{/* Date of Birth */}
			<div className='section'>
				{_ui.lang === 'en_US' ?
					<span>Date of Birth</span>
					:
					<span>생년월일</span>
				}
				<select id='birth_year' defaultValue='default'>
					<Year />
				</select>
				<select id='birth_month' defaultValue='default'>
					<Month />
				</select>
				<select id='birth_date' defaultValue='default'>
					<Date />
				</select>
				<BiCheckSquare className='check_btn' onClick={(e) => _handleDOB(e)} />
			</div>

			{/* Gender */}
			<div className='section'>
				{_ui.lang === 'en_US' ?
					<span>Gender</span>
					:
					<span>성별</span>
				}
				<div className='radio_container'>
					<div className='radio_section'>
						<span>Male</span>
						<input type={'radio'} name='gender' value='0' defaultChecked />
					</div>
					<div className='radio_section'>
						<span>Female</span>
						<input type={'radio'} name='gender' value='1' />
					</div>
				</div>
				<BiCheckSquare className='check_btn' onClick={(e) => _handleGender(e)} />
			</div>

			{/* Notification */}
			<div className='section'>
				{_ui.lang === 'en_US' ?
					<span>Notification</span>
					:
					<span>알림</span>
				}
				<div className='radio_container'>
					<div className='radio_section'>
						<span>On</span>
						<input type={'radio'} name='notification' value='1' defaultChecked />
					</div>
					<div className='radio_section'>
						<span>Off</span>
						<input type={'radio'} name='notification' value='0' />
					</div>
				</div>
				<BiCheckSquare className='check_btn' onClick={(e) => _handleNotification(e)} />
			</div>

			{/* Bio */}
			<div className='section_wide'>
				<div className='section_wide_head'>
					{_ui.lang === 'en_US' ?
						<span>Bio</span>
						:
						<span>자기소개</span>
					}
					<BiCheckSquare className='check_btn' onClick={(e) => _handleBio(e)} />
				</div>
				<textarea name='bio' />
			</div>

			{/* Picture */}
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

		</div>
	);
};

export default Component;