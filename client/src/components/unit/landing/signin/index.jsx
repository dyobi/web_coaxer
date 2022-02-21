import './index.css';

const Component = ({ show }) => {
	return (
		<>
			{show ?
				<div></div>
				:
				''
			}
		</>
	);
};

export default Component;