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
	border-radius: 50px;
	cursor: pointer;
	height: 300px;
	position: relative;
	transition: all 0.3s;
	width: 300px;

	&:hover {
		filter: blur(5px);
	}
`;

export const ImageName = styled.h1`
	color: white;
	cursor: pointer;
	font-size: 40px;
	margin: 0;
	opacity: 0;
	position: relative;
	text-align: center;
	transform: translateY(-170px);
	transition: 0.4s;
`;

export const AgentContainer = styled.div`
	align-items: center;
	column-gap: 50px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const HTML = styled.html`
	background-color: white;
`;
