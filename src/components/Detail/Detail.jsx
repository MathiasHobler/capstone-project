import {BookmarkAdd, BookmarkRemove, Edit, Close, Delete} from '@mui/icons-material';
import {nanoid} from 'nanoid';
import {NavLink} from 'react-router-dom';

import {useEvents} from '../../hooks/useEvents';
import {useStep, useCreate} from '../../hooks/useForm';
import {useUser} from '../../hooks/useUser';
import Button from '../Button/index';

import {DetailPOP, DetailContainer, ToolBTN, InfoContainer, Iframe, Img} from './Detail.styled';

const Detail = ({event, back}) => {
	const setNewEvent = useCreate(state => state.setNewEvent);
	const setAction = useStep(state => state.setAction);
	const setTitle = useStep(state => state.setTitle);
	const user = useUser(state => state.user);
	const {loading} = useEvents(state => state.events);
	const setUser = useUser(state => state.setUser);
	const updateEvent = useEvents(state => state.updateEvent);
	const deleteEvent = useEvents(state => state.deleteEvent);
	const date = new Date(event.date);

	function participates() {
		if (user.id) {
			if (!user.participates.includes(event._id)) {
				updateEvent(
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
			} else {
				updateEvent(
					{
						...event,
						participants: event.participants.filter(
							participant => participant !== user.id
						),
					},
					event._id
				);
				setUser({
					...user,
					participates: user.participates.filter(join => join !== event._id),
				});
			}
		} else {
			setUser({
				...user,
				participates: [...user.participates, event._id],
				id: nanoid(),
			});
		}
	}

	return (
		<DetailPOP>
			<DetailContainer>
				<ToolBTN onClick={back}>
					<Close />
				</ToolBTN>
				<ToolBTN
					onClick={() => {
						if (user.id) {
							if (!user.bookmarked.includes(event._id)) {
								setUser({
									...user,
									bookmarked: [...user.bookmarked, event._id],
								});
							} else {
								setUser({
									...user,
									bookmarked: user.bookmarked.filter(
										bookmark => bookmark !== event._id
									),
								});
							}
						} else {
							setUser({
								...user,
								bookmarked: [...user.bookmarked, event._id],
								id: nanoid(),
							});
						}
					}}
				>
					{!user.bookmarked.includes(event._id) && <BookmarkAdd />}
					{user.bookmarked.includes(event._id) && <BookmarkRemove />}
				</ToolBTN>
				<ToolBTN onClick={() => deleteEvent(event._id)} disabled={loading}>
					<Delete />
				</ToolBTN>

				<NavLink
					to="/create"
					onClick={() => {
						setAction('PUT');
						setTitle('Update Event');
						setNewEvent(event);
					}}
				>
					<Edit />
				</NavLink>

				<InfoContainer>
					<Img src={event.eventPicture} alt="EventPicture"></Img>
					<h2>{event.title}</h2>
					<p>{date.toDateString()}</p>
					<p>{event.time}</p>
					<h3>About</h3>
					<p>{event.description}</p>
					<h3>Location</h3>
					<p>{`${event.address} ${event.houseNumber}`}</p>
					<p>{`${event.zip} ${event.city}`}</p>
					<Iframe
						title="event.id"
						src={`https://maps.google.com/maps?q=${event.location[0]},${event.location[1]} &t=&z=15&ie=UTF8&iwloc=&output=embed`}
						width="100%"
						height="200"
					/>
					<Button
						type="button"
						onClick={() => {
							participates();
						}}
					>
						{user.participates.includes(event._id) ? 'not Going' : 'Participate'}
					</Button>
				</InfoContainer>
			</DetailContainer>
		</DetailPOP>
	);
};
export default Detail;
