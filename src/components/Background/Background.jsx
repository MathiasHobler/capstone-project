import styled, {keyframes} from 'styled-components';

const elements = [
	{
		id: 0,
		left: '-3%',
		width: '40px',
		height: '40px',
		animation_delay: '15s',
		animation_duration: '30s',
	},
	{
		id: 1,
		left: '5%',
		width: '30px',
		height: '30px',
		animation_delay: '5s',
		animation_duration: '20s',
	},
	{
		id: 2,
		left: '10%',
		width: '60px',
		height: '60px',
		animation_delay: '0s',
		animation_duration: '28s',
	},
	{
		id: 3,
		left: '15%',
		width: '10px',
		height: '10px',
		animation_delay: '19s',
		animation_duration: '30s',
	},
	{
		id: 4,
		left: '20%',
		width: '40px',
		height: '40px',
		animation_delay: '4s',
		animation_duration: '26s',
	},
	{
		id: 5,
		left: '25%',
		width: '20px',
		height: '20px',
		animation_delay: '15s',
		animation_duration: '28s',
	},
	{
		id: 6,
		left: '30%',
		width: '60px',
		height: '60px',
		animation_delay: '20s',
		animation_duration: '24s',
	},
	{
		id: 7,
		left: '35%',
		width: '10px',
		height: '10px',
		animation_delay: '2s',
		animation_duration: '27s',
	},
	{
		id: 8,
		left: '40%',
		width: '50px',
		height: '50px',
		animation_delay: '8s',
		animation_duration: '18s',
	},
	{
		id: 9,
		left: '45%',
		width: '40px',
		height: '40px',
		animation_delay: '5s',
		animation_duration: '38s',
	},
	{
		id: 10,
		left: '50%',
		width: '10px',
		height: '10px',
		animation_delay: '2s',
		animation_duration: '39s',
	},
	{
		id: 11,
		left: '55%',
		width: '30px',
		height: '30px',
		animation_delay: '22s',
		animation_duration: '26s',
	},
	{
		id: 12,
		left: '60%',
		width: '60px',
		height: '60px',
		animation_delay: '10s',
		animation_duration: '18s',
	},
	{
		id: 13,
		left: '65%',
		width: '10px',
		height: '10px',
		animation_delay: '12s',
		animation_duration: '24s',
	},
	{
		id: 14,
		left: '70%',
		width: '40px',
		height: '40px',
		animation_delay: '15s',
		animation_duration: '33s',
	},
	{
		id: 15,
		left: '75%',
		width: '20px',
		height: '20px',
		animation_delay: '2s',
		animation_duration: '30s',
	},
	{
		id: 16,
		left: '80%',
		width: '60px',
		height: '60px',
		animation_delay: '22s',
		animation_duration: '32s',
	},
	{
		id: 17,
		left: '85%',
		width: '10px',
		height: '10px',
		animation_delay: '12s',
		animation_duration: '25s',
	},
	{
		id: 18,
		left: '90%',
		width: '50px',
		height: '50px',
		animation_delay: '10s',
		animation_duration: '18s',
	},
	{
		id: 19,
		left: '95%',
		width: '40px',
		height: '40px',
		animation_delay: '2s',
		animation_duration: '30s',
	},
	{
		id: 20,
		left: '105%',
		width: '10px',
		height: '10px',
		animation_delay: '10s',
		animation_duration: '28s',
	},
];

export default function Background() {
	return (
		<Wallpaper>
			<ElementContainer>
				{elements.map(element => {
					return <Element key={element.id} element={element}></Element>;
				})}
			</ElementContainer>
		</Wallpaper>
	);
}

const Wallpaper = styled.section`
	width: 100vw;
	height: 0;
`;

const flyingBubble = keyframes`

0%{
        transform: translateY(0) rotate(0deg);
        border-radius: 0;
        opacity: 1;
        
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        border-radius: 50%;
        opacity: 0;
        
    }

`;

const Element = styled.li`
	display: block;
	position: fixed;
	bottom: -150px;
	left: ${props => props.element.left};
	width: ${props => props.element.width};
	height: ${props => props.element.height};
	animation-name: ${flyingBubble};
	animation-duration: ${props => props.element.animation_duration};
	animation-delay: ${props => props.element.animation_delay};
	animation-iteration-count: infinite;
	border: 1px solid rgba(255, 255, 255, 0.18);
	border-radius: 20%;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
	list-style: none;
	backdrop-filter: blur(10px);
`;

const ElementContainer = styled.ul`
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;
