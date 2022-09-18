import styled from 'styled-components';

export const AgentCardDiv = styled.div`
	margin-top: 30px;
	transition: all 0.5s;

	&:hover h1 {
		opacity: 1;
	}
`;

export const ImageCard = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 50px;
	position: relative;
	background-color: black;
	transition: all 0.3s;
	cursor: pointer;

	&:hover {
		filter: blur(5px);
	}
`;

export const ImageName = styled.h1`
	color: white;
	font-size: 40px;
	margin: 0;
	opacity: 0;
	position: relative;
	text-align: center;
	transition: 0.4s;
	transform: translateY(-170px);
`;

export const AgentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 50px;
	align-items: center;
	justify-content: center;
`;

export const HTML = styled.html`
	background-color: white;
`;
