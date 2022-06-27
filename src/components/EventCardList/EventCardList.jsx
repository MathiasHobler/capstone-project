import {useState, useEffect} from 'react';

import EventCard from '../EventCard/EventCard';

import EventListContainer from './EventCardList.styled';

const EventCardList = ({eventList}) => {
	const [{data}, setData] = useState({data: [], error: null});

	useEffect(() => {
		fetch('/api/events')
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				setData({
					data: data.data,
					error: null,
				});
			})
			.catch(error => {
				setData({
					data: [],
					error: error.message,
				});
			});
	}, []);

	return (
		<EventListContainer>
			{data.map(singleEvent => {
				return <EventCard key={singleEvent._id} event={singleEvent}></EventCard>;
			})}
		</EventListContainer>
	);
};

export default EventCardList;
