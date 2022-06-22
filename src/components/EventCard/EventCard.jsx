import EventCardContainer from './EventCard.styled';

const EventCard = ({event}) => {
	return (
		<EventCardContainer>
			<img
				src={event.pictures.eventPicture}
				alt="EventPicture"
				aria-label="EventPicture"
			></img>
			<article>
				<h2 aria-level="2">{event.eventName}</h2>
				<p className="description">{event.desc}</p>
				<p className="date">{event.date}</p>
			</article>
		</EventCardContainer>
	);
};

export default EventCard;
