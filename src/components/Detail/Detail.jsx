import {BookmarkAdd, BookmarkRemove, Edit, Close, Delete} from '@mui/icons-material';
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import {useStep, useCreate} from '../../hooks/useForm';

import DetailPOP from './Detail.styled';

const Detail = ({event, back, deleteEvent, bookmark}) => {
	const setNewEvent = useCreate(state => state.setNewEvent);
	const setAction = useStep(state => state.setAction);
	const setTitle = useStep(state => state.setTitle);

	const date = new Date(event.date);
	const lat = 48.17993927001953;
	const lng = 10.750860214233398;

	useEffect(() => {
		setAction('update');
		setTitle('Update Event');
	}, [setAction, setTitle]);

	return (
		<DetailPOP>
			<article>
				<button onClick={back}>
					<Close />
				</button>
				<button
					onClick={() => {
						bookmark({...event, bookmark: !event.bookmark}, event._id);
					}}
				>
					{!event.bookmark && <BookmarkAdd />}
					{event.bookmark && <BookmarkRemove />}
				</button>
				<button onClick={() => deleteEvent(event._id)}>
					<Delete />
				</button>

				<NavLink to="/create" onClick={() => setNewEvent(event)}>
					<Edit />
				</NavLink>

				<section>
					<img src={event.eventPicture} alt="EventPicture"></img>
					<h2>{event.title}</h2>
					<p>{date.toDateString()}</p>
					<p>{event.time}</p>
					<h3>About</h3>
					<p>{event.description}</p>
					<h3>Location</h3>
					<p>{`${event.address} ${event.houseNumber}`}</p>
					<p>{`${event.zip} ${event.city}`}</p>
					<iframe
						title="event.id"
						src={`https://maps.google.com/maps?q=${lat},${lng} &t=&z=15&ie=UTF8&iwloc=&output=embed`}
						width="100%"
						height="200"
					/>
				</section>
			</article>
		</DetailPOP>
	);
};

export default Detail;
