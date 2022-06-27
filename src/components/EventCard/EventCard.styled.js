import styled from 'styled-components';

const EventCardContainer = styled.li`
	width: min(100% - 2rem);
	margin: auto;
	padding: 1em;
	background: ${props => (props.details ? 'aqua' : 'lightcoral')};
	list-style: none;
	z-index: ${props => (props.details ? '500' : 'auto')};

	article {
		display: grid;
		grid-template-areas:
			'title date'
			'desc desc';
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 0.2fr 1fr;
		gap: 0 0;

		h2 {
			max-height: 2em;
			grid-area: title;
		}
		.date {
			max-height: 2em;
			grid-area: date;
			text-align: end;
		}
		.description {
			margin-top: 1em;
			grid-area: desc;
			overflow: ${props => (props.details ? 'auto' : 'hidden')};
			text-overflow: ${props => (props.details ? 'visible overflow' : 'ellipsis')};
			white-space: ${props => (props.details ? 'wrap' : 'nowrap')};
		}
	}

	iframe {
		margin-left: 50%;
	}

	img {
		width: 100%;
		height: 10em;
	}
`;

export default EventCardContainer;
