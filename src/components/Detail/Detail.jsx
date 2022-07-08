import {Bookmark, Close, Delete} from '@mui/icons-material';
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import {useStep, useCreate} from '../../hooks/useForm';

import DetailPOP from './Detail.styled';

const Detail = ({event, back, deleteEvent, bookmark}) => {
	const setNewEvent = useCreate(state => state.setNewEvent);
	const setAction = useStep(state => state.setAction);
	const setTitle = useStep(state => state.setTitle);

	useEffect(() => {
		setNewEvent(event);
		setAction('update');
		setTitle('Update Event');
	}, []);

	return (
		<DetailPOP className="background">
			<article>
				<button onClick={back}>
					<Close />
				</button>
				<button className="deleteBTN" onClick={() => deleteEvent(event._id)}>
					<Delete />
				</button>
				<button
					className="bookmarkBTN"
					onClick={() => {
						bookmark({...event, bookmark: !event.bookmark}, event._id);
					}}
				>
					<Bookmark />
				</button>

				<NavLink to="/create" className="bookmarkEdit">
					Edit Event
				</NavLink>

				<section>
					<h2>{event.title}</h2>
					<p>{event.date}</p>
					<p>{event.description}</p>
					<iframe
						title="event.id"
						src="https://maps.google.com/maps?q=neuefische&t=&z=13&ie=UTF8&iwloc=&output=embed"
						width="100%"
						height="200"
					/>
				</section>
			</article>
		</DetailPOP>
	);
};

export default Detail;
