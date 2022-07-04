import {useEffect} from 'react';

import {useCreate} from '../../hooks/useForm';

const Success = ({error}) => {
	const setNewEvent = useCreate(state => state.setNewEvent);

	useEffect(() => {
		setNewEvent({
			eventPicture: '',
			title: '',
			private: false,
			street: '',
			city: '',
			zip: '',
			date: '',
			time: '',
			description: '',
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{!error && <div>Successfully created Event</div>}
			{error && <div>An error occured: Please try again later</div>}
		</>
	);
};

export default Success;
