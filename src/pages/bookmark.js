import {useState} from 'react';

import ParticipateEvent from '../components/ParticipateEvents/ParticipateEvents';
import SavedEvents from '../components/SavedEvents/SavedEvents';
import Tabbar from '../components/Tabbar/Tabbar';

export default function Bookmark() {
	const [tab, setTab] = useState(false);
	return (
		<>
			<Tabbar tab={() => setTab(!tab)} />
			{tab && <SavedEvents />}
			{!tab && <ParticipateEvent />}
		</>
	);
}
