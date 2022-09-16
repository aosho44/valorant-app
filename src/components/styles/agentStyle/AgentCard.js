import { AgentCardDiv, ImageCard } from './AgentCard.styles';

import React from 'react';

function AgentCards(props) {
	const { data } = props;

	return (
		<AgentCardDiv>
			<ImageCard src={data.displayIcon} alt={data.displayName} />
		</AgentCardDiv>
	);
}

export { AgentCards };
