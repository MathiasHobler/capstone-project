import {useEvents} from '../../hooks/useEvents';
import {useUser} from '../../hooks/useUser';
import EventCard from '../EventCard/EventCard';
import EventListContainer from '../EventCardList/EventCardList.styled';

const ParticipateEvent = () => {
	const events = useEvents(state => state.events);
	const user = useUser(state => state.user);
	return (
		<EventListContainer data-testid="list">
			{events
				.filter(event => {
					return user.participates.includes(event._id);
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

export default ParticipateEvent;
