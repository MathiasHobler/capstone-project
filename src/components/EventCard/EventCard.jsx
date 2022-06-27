import {useState} from 'react';

import EventCardContainer from './EventCard.styled';

const EventCard = ({event}) => {
	const [details, setDetails] = useState(false);
	console.log(details);
	return (
		<EventCardContainer
			details={details}
			onClick={() => {
				setDetails(!details);
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
				{details && (
					<dialog>
						<iframe
							src="https://maps.google.com/maps?q=neuefische&t=&z=13&ie=UTF8&iwloc=&output=embed"
							width="100%"
							height="200"
						/>
					</dialog>
				)}
			</article>
		</EventCardContainer>
	);
};

export default EventCard;
