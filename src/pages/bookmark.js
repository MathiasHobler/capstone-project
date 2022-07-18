import {useState, useEffect} from 'react';

import EventCard from '../components/EventCard/EventCard';
import EventListContainer from '../components/EventCardList/EventCardList.styled';
import NavBar from '../components/NavBar/NavBar';
import Tabbar from '../components/Tabbar/Tabbar';
import {useEvents} from '../hooks/useEvents';
import {useUser} from '../hooks/useUser';

export default function Bookmark() {
	const [tab, setTab] = useState('saved');
	const getData = useEvents(state => state.getData);
	const {events, error} = useEvents(state => state.events);
	const user = useUser(state => state.user);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<>
			<Tabbar setTab={input => setTab(input)} />
			<EventListContainer data-testid="list">
				{error && <div>An error occured: {error}</div>}
				{events
					.filter(event => {
						if (tab === 'saved') {
							return user.bookmarked.includes(event._id);
						} else {
							return user.participates.includes(event._id);
						}
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
		</>
	);
}
