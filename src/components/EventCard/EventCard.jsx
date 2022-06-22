import EventCardContainer from './EventCard.styled';

const EventCard = () => {
	const dummyArr = [
		{
			pictures: {
				eventPicture: 'https://www.meetandeat-berlin.de/img/logo.svg',
				coverPicture: '',
			},
			adress: {
				street: '',
				city: '',
			},
			private: false,
			categories: [],
			_id: '62b185e11a4caaa125207cab',
			eventName: 'Event1',
			eventPicture: '',
			coverPicture: '',
			participates: [],
			desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
			date: 'THU 30. Jun',
			location: [],
		},
	];
	return (
		<EventCardContainer>
			<img src={dummyArr[0].pictures.eventPicture} alt="EventPicture"></img>
			<article>
				<h2>{dummyArr[0].eventName}</h2>
				<p className="description">{dummyArr[0].desc}</p>
				<p className="date">{dummyArr[0].date}</p>
			</article>
		</EventCardContainer>
	);
};

export default EventCard;
