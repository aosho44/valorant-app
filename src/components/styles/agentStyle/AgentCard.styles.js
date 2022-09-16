import styled from 'styled-components';

export const AgentCardDiv = styled.div`
	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		transform: scale(1.05);
		transition: all 0.3s;
	}
`;

export const ImageCard = styled.img`
	width: 300px;
	height: 300px;
`;

export const AgentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	align-items: center;
	justify-content: center;
`;
