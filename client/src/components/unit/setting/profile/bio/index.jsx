import { useSelector } from 'react-redux';
import { BiCheckSquare } from 'react-icons/bi';

const Component = () => {

	const _ui = useSelector(state => state.ui);

	const _handleBio = (e) => {
		e.preventDefault();
		const bio = document.querySelector(`textarea[name='bio']`).value;
		console.log(bio);
	};

	return (
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
	);
};

export default Component;