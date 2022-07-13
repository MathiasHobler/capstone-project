import {useState, useEffect} from 'react';

import EventCard from '../components/EventCard/EventCard';
import EventListContainer from '../components/EventCardList/EventCardList.styled';

export default function Bookmark({bookmark}) {
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
			{data
				.filter(event => {
					return event.bookmark === true;
				})
				.map(singleEvent => {
					return (
						<EventCard
							key={singleEvent._id}
							bookmark={bookmarkEvent}
							data-testid="listItem"
							event={singleEvent}
						></EventCard>
					);
				})}
		</EventListContainer>
	);
}
