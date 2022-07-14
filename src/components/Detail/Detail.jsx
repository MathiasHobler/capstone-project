import {BookmarkAdd, BookmarkRemove, Edit, Close, Delete} from '@mui/icons-material';
import {nanoid} from 'nanoid';
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import {useStep, useCreate} from '../../hooks/useForm';
import {useUser} from '../../hooks/useUser';
import Button from '../Button/index';

import {DetailPOP, DetailContainer, ToolBTN, InfoContainer} from './Detail.styled';

const Detail = ({event, back, deleteEvent, bookmark}) => {
	const setNewEvent = useCreate(state => state.setNewEvent);
	const setAction = useStep(state => state.setAction);
	const setTitle = useStep(state => state.setTitle);
	const user = useUser(state => state.user);
	const setUser = useUser(state => state.setUser);
	const date = new Date(event.date);

	useEffect(() => {
		setAction('update');
		setTitle('Update Event');
	}, [setAction, setTitle]);

	return (
		<DetailPOP>
			<DetailContainer>
				<ToolBTN onClick={back}>
					<Close />
				</ToolBTN>
				<ToolBTN
					onClick={() => {
						bookmark({...event, bookmark: !event.bookmark}, event._id);
					}}
				>
					{!event.bookmark && <BookmarkAdd />}
					{event.bookmark && <BookmarkRemove />}
				</ToolBTN>
				<ToolBTN onClick={() => deleteEvent(event._id)}>
					<Delete />
				</ToolBTN>

				<NavLink to="/create" onClick={() => setNewEvent(event)}>
					<Edit />
				</NavLink>

				<InfoContainer>
					<img src={event.eventPicture} alt="EventPicture"></img>
					<h2>{event.title}</h2>
					<p>{date.toDateString()}</p>
					<p>{event.time}</p>
					<h3>About</h3>
					<p>{event.description}</p>
					<h3>Location</h3>
					<p>{event.address}</p>
					<p>{`${event.zip} ${event.city}`}</p>
					<iframe
						title="event.id"
						src="https://maps.google.com/maps?q=neuefische&t=&z=13&ie=UTF8&iwloc=&output=embed"
						width="100%"
						height="200"
					/>
					<Button
						type="button"
						onClick={() => {
							if (user.id) {
								if (!user.participates.includes(event._id)) {
									bookmark(
										{
											...event,
											participants: [event.participants, user.id],
										},
										event._id
									);
									setUser({
										...user,
										participates: [...user.participates, event._id],
									});
								}
							} else {
								setUser({
									...user,
									participates: [...user.participates, event._id],
									id: nanoid(),
								});
							}
						}}
					>
						Participate
					</Button>
				</InfoContainer>
			</DetailContainer>
		</DetailPOP>
	);
};
export default Detail;
