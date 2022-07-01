import {useStep, useCreate} from '../../hooks/useForm';

const Success = () => {
	const step = useStep(state => state.step);
	const nextStep = useStep(state => state.nextStep);
	const prevStep = useStep(state => state.prevStep);
	return (
		<div>
			Successfully created Event
			<button
				onClick={() => {
					if (step > 1) {
						prevStep();
					}
				}}
			>
				Step backward
			</button>
			<button type="submit">submit</button>
		</div>
	);
};

export default Success;
