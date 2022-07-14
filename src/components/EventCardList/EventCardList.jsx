import {useEffect} from 'react';

import {useEvents} from '../../hooks/useEvents';
import EventCard from '../EventCard/EventCard';

import EventListContainer from './EventCardList.styled';

const EventCardList = ({eventList}) => {
	const getData = useEvents(state => state.getData);
	const {events, error} = useEvents(state => state.events);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<EventListContainer data-testid="list">
			{error && <div>An error occured: {error}</div>}
			{events.map(singleEvent => {
				return (
					<EventCard
						data-testid="listItem"
						key={singleEvent._id}
						event={singleEvent}
					></EventCard>
				);
			})}
		</EventListContainer>
	);
};

export default EventCardList;
