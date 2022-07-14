import {useEffect} from 'react';

import {useEvents} from '../../hooks/useEvents';
import {useUser} from '../../hooks/useUser';
import EventCard from '../EventCard/EventCard';
import EventListContainer from '../EventCardList/EventCardList.styled';

const SavedEvents = () => {
	const getData = useEvents(state => state.getData);
	const {events, error} = useEvents(state => state.events);
	const user = useUser(state => state.user);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<EventListContainer data-testid="list">
			{error && <div>An error occured: {error}</div>}
			{events
				.filter(event => {
					return user.bookmarked.includes(event._id);
				})
				.map(singleEvent => {
					return (
						<EventCard
							key={singleEvent._id}
							data-testid="listItem"
							event={singleEvent}
						></EventCard>
					);
				})}
		</EventListContainer>
	);
};

export default SavedEvents;
