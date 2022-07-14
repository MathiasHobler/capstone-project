import {useState, useEffect} from 'react';

import {useEvents} from '../../hooks/useEvents';
import EventCard from '../EventCard/EventCard';

import EventListContainer from './EventCardList.styled';

const EventCardList = ({eventList}) => {
	const [{data, error}, setData] = useState({data: [], error: null});
	const setEvents = useEvents(state => state.setEvents);
	const fetchData = useEvents(state => state.fetchData);
	const {events} = useEvents(state => state.events);

	const [render, newRender] = useState('');

	useEffect(() => {
		fetchData();
		console.log(events);
		// fetch('/api/events')
		// 	.then(response => {
		// 		if (!response.ok) {
		// 			throw Error(response.statusText);
		// 		} else {
		// 			return response.json();
		// 		}
		// 	})
		// 	.then(data => {
		// 		console.log(data);
		// 		setData({
		// 			data: data.data,
		// 			error: null,
		// 		});
		// 		setEvents(data.data);
		// 	})
		// 	.catch(error => {
		// 		setData({
		// 			data: [],
		// 			error: error.message,
		// 		});
		// 	});
	}, [render]);

	function deleteEvent(id) {
		fetch(`/api/events/${id}`, {
			method: 'DELETE',
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				newRender(data);
			})
			.catch(error => {
				setData({
					data: '',
					error: error.message,
				});
			});
	}

	function bookmarkEvent(data, id) {
		fetch(`/api/events/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				newRender(data);
			})
			.catch(error => {
				setData({
					data: '',
					error: error.message,
				});
			});
	}

	return (
		<EventListContainer data-testid="list">
			{error && <div>An error occured: {error}</div>}
			{console.log(events)}
			{events.map(singleEvent => {
				return (
					<EventCard
						data-testid="listItem"
						key={singleEvent._id}
						event={singleEvent}
						deleteEvent={deleteEvent}
						bookmark={bookmarkEvent}
					></EventCard>
				);
			})}
			{/* {data.map(singleEvent => {
				return (
					<EventCard
						data-testid="listItem"
						key={singleEvent._id}
						event={singleEvent}
						deleteEvent={deleteEvent}
						bookmark={bookmarkEvent}
					></EventCard>
				);
			})} */}
		</EventListContainer>
	);
};

export default EventCardList;
