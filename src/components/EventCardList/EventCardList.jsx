import {useEffect} from 'react';

import {useEvents} from '../../hooks/useEvents';
import useStore from '../../hooks/useStore';
import EventCard from '../EventCard/EventCard';

import EventListContainer from './EventCardList.styled';

const EventCardList = ({eventList}) => {
	const getData = useEvents(state => state.getData);
	const {events, error} = useEvents(state => state.events);
	const active = useStore(state => state.active);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<EventListContainer data-testid="list">
			{error && <div>An error occured: {error}</div>}
			{events
				.filter(event => event.categories.includes(active))
				.map(singleEvent => {
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
