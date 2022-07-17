import styled from 'styled-components';

export const Img = styled.img`
	width: 100%;
	height: 10em;
	margin-bottom: 0.5em;
	border-top-left-radius: 1.5em;
	border-top-right-radius: 1.5em;
`;

export const EventCardContainer = styled.li`
	z-index: 1;
	width: min(100% - 2rem);
	max-width: 500px;
	margin: auto;
	padding: 1em;
	border: 2px solid rgba(255, 255, 255, 0.1);
	border-radius: 1.5em;
	background: rgba(255, 255, 255, 0.06);
	box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
	color: white;
	list-style: none;
	backdrop-filter: -webkit-blur(10px);
	backdrop-filter: -moz-blur(10px);
	backdrop-filter: -ms-blur(10px);
	backdrop-filter: blur(10px);

	a {
		color: white;
		text-decoration: none;
	}
	article {
		display: grid;
		grid-template-areas:
			'title date'
			'desc desc';
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 0.2fr 1fr;
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
			margin-top: 1em;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
`;
