import EventCard from '../EventCard/EventCard';

import EventListContainer from './EventCardList.styled';

const EventCardList = ({eventList}) => {
	return (
		<EventListContainer>
			{eventList.map(singleEvent => {
				return <EventCard key={singleEvent._id} event={singleEvent}></EventCard>;
			})}
		</EventListContainer>
	);
};

export default EventCardList;
