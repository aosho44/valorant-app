import styled from 'styled-components';

export const SingleAgentContainer = styled.div`
	height: 100vh;
`;

export const AgentCardDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100vw;
	background-color: ${(props) => props.bgColour1};
`;

export const ImageCard = styled.img`
	min-height: 100vh;
	height: 100%;
	width: 100%;
	padding: 0;
	object-fit: cover;
`;

export const DescriptionCard = styled.div`
	padding: 3vh;
	background-color: ${(props) => props.bgColour1};
	color: white;
`;

export const BackgroundImageDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url('${(props) => props.image}');
	background-repeat: no-repeat;
	background-size: 120vh;
	height: 100vh;
	width: 100vh;
	background-position: center;
`;

export const AgentsName = styled.h1`
	font-size: 10vh;
	text-align: center;
`;

export const DescriptionText = styled.p`
	font-size: 3vh;
`;

export const AbilityCard = styled.div`
	display: flex;
	flex-direction: column;
`;

export const AbilityRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1vh;
	justify-content: space-evenly;
`;

export const AbilityImage = styled.img`
	width: 10vh;
	height: 10vh;
`;

export const AbilityImageText = styled.div``;

export const AbilityText = styled.h1`
	font-size: 1vh;
`;
