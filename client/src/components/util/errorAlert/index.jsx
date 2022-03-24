import Alert from '../../unit/alert';

const Component = ({ alertView, setAlertView }) => {
	return (
		<Alert
			show={alertView}
			setShow={() => setAlertView()}
			type={'confirm'}
			enDesc={'Something went wrong during the process. Please try again later.'}
			krDesc={'알 수 없는 오류가 발생하였습니다. 잠시 후에 다시 시도하여 주세요.'}
			cb1={() => setAlertView(false)}
			cb2={() => null}
		/>
	);
};

export default Component;