import {useState} from 'react';

import Detail from '../Detail/Detail';

import {EventCardContainer, Img} from './EventCard.styled';

const EventCard = ({event, deleteEvent, bookmark}) => {
	const [details, setDetails] = useState(false);
	const date = new Date(event.date);

	const toggleDetail = () => {
		setDetails(!details);
	};

	return (
		<>
			<EventCardContainer
				details={details}
				onClick={() => {
					toggleDetail();
				}}
			>
				<Img src={event.eventPicture} alt="EventPicture"></Img>
				<article>
					<h2 aria-level="2">{event.title}</h2>
					<p className="description">{event.description}</p>
					<p className="date">{date.toDateString()}</p>
				</article>
			</EventCardContainer>

			{details && (
				<Detail
					event={event}
					deleteEvent={deleteEvent}
					bookmark={bookmark}
					back={() => toggleDetail()}
				/>
			)}
		</>
	);
};

export default EventCard;
