import {useStep, useCreate} from '../../hooks/useForm';

const Success = () => {
	const step = useStep(state => state.step);
	const prevStep = useStep(state => state.prevStep);
	return <div>Successfully created Event</div>;
};

export default Success;
