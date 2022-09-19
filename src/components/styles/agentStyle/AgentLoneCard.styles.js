import styled from 'styled-components';

export const SingleAgentContainer = styled.div`
	background-color: white;
`;

export const AgentCardDiv = styled.div`
	display: flex;
	flex-direction: row;
	background-color: ${(props) => props.bgColour1};
`;

export const ImageCard = styled.img`
	height: 90vh;
	padding: 0;
`;

export const DescriptionCard = styled.div`
	padding: 3vh;
	border-radius: 2vh;
	margin: 4vh;
	background-color: ${(props) => props.bgColour1};
	color: white;
`;

export const AgentsName = styled.h1`
	font-size: 10vh;
	text-align: center;
`;

export const DescriptionText = styled.p`
	font-size: 3vh;
`;

export const BackgroundImageDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url('${(props) => props.image}');
	background-repeat: no-repeat;
	background-position: 10vh -10vh;
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
