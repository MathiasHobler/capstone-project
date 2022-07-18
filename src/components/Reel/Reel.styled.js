import styled from 'styled-components';
export const IconLabel = styled.p`
	margin-top: 0.2em;
	color: inherit;
`;
export const IconFrame = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 4.5em;
	height: 4.5em;
	margin-left: 0.7em;
	padding: 1em;
	border-radius: 1em;
	background: transparent;
	box-shadow: inset 0 0 10px 2px white;
	color: ${props =>
		props.isActive === props.zustand ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)'};
	${IconLabel} {
		color: ${props =>
			props.isActive === props.zustand ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.3)'};
	}
`;
export const ReelBody = styled.section`
	display: flex;
	position: fixed;
	top: 0.25em;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: min(100% - 2.5rem);
	max-width: 550px;
	height: 4em;
	margin: 0 auto;
	margin-bottom: 1em;
	overflow: hidden;
	overflow-x: scroll;
	border-radius: 1em;
	background: rgba(0, 0, 0, 0.2);
	scrollbar-color: blue;
`;

export default ReelBody;
