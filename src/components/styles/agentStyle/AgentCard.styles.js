import styled from 'styled-components';

export const AgentCardDiv = styled.div`
	margin-top: 30px;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		transform: scale(1.1);
		transition: all 0.3s;
	}
`;

export const ImageCard = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 50px;
	position: relative;
	background-color: black;
`;

export const ImageName = styled.h1`
	color: white;
	text-align: center;
	position: relative;
	bottom: 170px;
	margin: 0;
`;

export const AgentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 50px;
	align-items: center;
	justify-content: center;
`;

export const HTML = styled.html`
	background-color: white;
`;
