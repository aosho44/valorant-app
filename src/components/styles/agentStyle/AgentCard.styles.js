import styled from 'styled-components';

export const AgentCardDiv = styled.div`
	margin-top: 30px;
	transition: all 0.5s;

	&:hover h1 {
		opacity: 1;
	}
`;

export const ImageCard = styled.img`
	background-color: black;
	border-radius: 5vh;
	cursor: pointer;
	height: 35vh;
	position: relative;
	transition: all 0.3s;
	width: 35vh;

	&:hover {
		filter: blur(5px);
	}
`;

export const ImageName = styled.h1`
	color: white;
	cursor: pointer;
	font-size: 4vh;
	margin: 0;
	opacity: 0;
	position: relative;
	text-align: center;
	transform: translateY(-18vh);
	transition: 0.4s;
`;

export const AgentContainer = styled.div`
	align-items: center;
	column-gap: 5vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const HTML = styled.html`
	background-color: white;
`;
