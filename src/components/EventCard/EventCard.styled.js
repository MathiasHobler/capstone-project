import styled from 'styled-components';

const EventCardContainer = styled.section`
	width: min(100% - 2rem);
	margin: auto;
	background: lightcoral;
	padding: 1em;

	article {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 0px 0px;
		grid-template-areas:
			'title date'
			'desc desc';
		h2 {
			grid-area: title;
		}
		.date {
			grid-area: date;
			text-align: end;
		}
		.description {
			grid-area: desc;
			text-overflow: ellipsis;
			overflow: hidden;

			white-space: nowrap;
		}
	}

	img {
		width: 100%;
		height: 10em;
	}
`;

export default EventCardContainer;
