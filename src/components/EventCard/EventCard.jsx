import {useState} from 'react';

import Detail from '../Detail/Detail';

import EventCardContainer from './EventCard.styled';

const EventCard = ({event}) => {
	const [details, setDetails] = useState(false);

	const switcher = () => {
		setDetails(!details);
	};

	return (
		<>
			<EventCardContainer
				details={details}
				onClick={() => {
					switcher();
				}}
			>
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

			{details && <Detail event={event} back={() => switcher()} />}
		</>
	);
};

export default EventCard;
