import {useEffect} from 'react';

import {useCreate} from '../../hooks/useForm';

const Success = ({error}) => {
	const setNewEvent = useCreate(state => state.setNewEvent);

	useEffect(() => {
		setNewEvent({
			pictures: {
				eventPicture: '',
			},
			title: '',
			private: false,
			street: '',
			city: '',
			zip: '',
			date: '',
			time: '',
			description: '',
		});
	}, []);

	return (
		<>
			{!error && <div div>Successfully created Event</div>}

			{error && <div>An error occured: Please try again later {error}</div>}
		</>
	);
};

export default Success;
