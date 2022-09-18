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
	height: 800px;
	padding: 0;
`;

export const DescriptionCard = styled.div`
	padding: 30px;
	border-radius: 20px;
	margin: 40px;
	background-color: ${(props) => props.bgColour1};
	color: white;
`;

export const AgentsName = styled.h1`
	font-size: 100px;
	text-align: center;
`;

export const DescriptionText = styled.p`
	font-size: 30px;
`;

export const BackgroundImageDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url('${(props) => props.image}');
	background-repeat: no-repeat;
	background-position: 100px -100px;
`;

export const AbilityCard = styled.div`
	display: flex;
	flex-direction: column;
`;

export const AbilityRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	justify-content: space-evenly;
`;

export const AbilityImage = styled.img`
	width: 100px;
	height: 100px;
`;

export const AbilityImageText = styled.div``;

export const AbilityText = styled.h1`
	font-size: 10px;
`;
