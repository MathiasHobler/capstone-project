import {useState, useEffect} from 'react';

import EventCard from '../EventCard/EventCard';

import EventListContainer from './EventCardList.styled';

const EventCardList = ({eventList}) => {
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
				console.log(data);
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
			{data.map(singleEvent => {
				return (
					<EventCard
						data-testid="listItem"
						key={singleEvent._id}
						event={singleEvent}
						deleteEvent={deleteEvent}
					></EventCard>
				);
			})}
		</EventListContainer>
	);
};

export default EventCardList;
