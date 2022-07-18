import styled from 'styled-components';

export const FlexContainer = styled.article`
	display: flex;
	flex-direction: row;
	gap: 1em;
`;

export const IconLabel = styled.p`
	margin-top: 0.2em;
`;

export const Iconframe = styled.button`
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
	box-shadow: inset 0 0 10px 2px;
	color: ${props => (props.isActive ? 'rgba(219, 166, 50,1)' : 'rgba(255,255,255,0.3)')};
	${IconLabel} {
		color: ${props => (props.isActive ? 'rgba(219, 166, 50,1)' : 'rgba(255,255,255,0.3)')};
	} ;
`;

export const DialField = styled.section`
	display: flex;
	position: relative;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.5em;
`;

export const FormHint = styled.p`
	color: #dba632;
`;

export const FormHeader = styled.h3`
	color: #f7f7f7;
	font-size: 32px;
	font-weight: 500;
	line-height: 42px;
	text-align: center;
`;

export const BTNContainer = styled.article`
	display: flex;
	justify-content: space-around;
	height: 3.5em;
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	gap: 2em;
	width: 80%;
	max-width: 500px;
	height: 32em;
	margin: auto;
	margin-top: 3em;
	border: 2px solid rgba(255, 255, 255, 0.1);
	border-radius: 1.5em;
	background: rgba(0, 128, 255, 0.2);
	box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
	backdrop-filter: -webkit-blur(10px);
	backdrop-filter: -moz-blur(10px);
	backdrop-filter: -ms-blur(10px);
	backdrop-filter: blur(10px);
`;

export const Container = styled.section`
	display: flex;
	flex-basis: 50%;
	flex-direction: column;
	gap: 1em;
`;
