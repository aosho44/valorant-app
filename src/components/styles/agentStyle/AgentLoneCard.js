import { AgentCardDiv, ImageCard } from './AgentLoneCard.styles';

import React from 'react';

function AgentsLoneCard(props) {
	const { data } = props;

	return (
		<AgentCardDiv>
			<ImageCard src={data.fullPortrait} alt={data.displayName} />
		</AgentCardDiv>
	);
}

export { AgentsLoneCard };
