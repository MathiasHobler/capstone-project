import styled from 'styled-components';

const EventCardContainer = styled.li`
	width: min(100% - 2rem);
	margin: auto;
	padding: 1em;
	background: lightcoral;
	list-style: none;

	article {
		display: grid;
		grid-template-areas:
			'title date'
			'desc desc';
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 0 0;

		h2 {
			grid-area: title;
		}
		.date {
			grid-area: date;
			text-align: end;
		}
		.description {
			grid-area: desc;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	img {
		width: 100%;
		height: 10em;
	}
`;

export default EventCardContainer;
