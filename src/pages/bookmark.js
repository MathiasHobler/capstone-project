import {useState} from 'react';

import ParticipateEvent from '../components/ParticipateEvents/ParticipateEvents';
import SavedEvents from '../components/SavedEvents/SavedEvents';
import Tabbar from '../components/Tabbar/Tabbar';

export default function Bookmark({bookmark}) {
	const [tab, setTab] = useState(false);
	return (
		<>
			<Tabbar tab={tab => setTab(!tab)} />
			{tab && <SavedEvents />}
			{!tab && <ParticipateEvent />}
		</>
	);
}
