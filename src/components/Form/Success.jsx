import {useEffect} from 'react';

import {useCreate} from '../../hooks/useForm';

const Success = ({error}) => {
	const setNewEvent = useCreate(state => state.setNewEvent);

	useEffect(() => {
		setNewEvent({
			eventPicture:
				'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg',
			title: '',
			private: false,
			street: '',
			city: '',
			zip: '',
			date: '',
			time: '',
			description: '',
			categories: ['all', ''],
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
