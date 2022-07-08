import {useState, useEffect} from 'react';

import useStore from '../../hooks/useStore';
import EventCard from '../EventCard/EventCard';

import EventListContainer from './EventCardList.styled';

const EventCardList = ({eventList}) => {
	const active = useStore(state => state.active);
	const [{data, error}, setData] = useState({data: [], error: null});

	const [render, newRender] = useState('');

	useEffect(() => {
		fetch('/api/events')
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				setData({
					data: data.data,
					error: null,
				});
			})
			.catch(error => {
				setData({
					data: [],
					error: error.message,
				});
			});
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
			{console.log(
				data.filter(event => {
					if (event.categories.includes(active)) {
						return event;
					}
				})
			)}
			{data
				.filter(event => {
					if (event.categories.includes(active)) {
						return event;
					}
				})
				.map(singleEvent => {
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
		</EventListContainer>
	);
};

export default EventCardList;
