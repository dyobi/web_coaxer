import './index.css';

const Component = (props) => {
	return (
		<>
			<div
				className='marker_container marker_bounce' onClick={() => props.click()}
			>
				<img src={props.img} alt='' />
			</div>
			<div className='marker_pulse' />
		</>
	);
};

export default Component;