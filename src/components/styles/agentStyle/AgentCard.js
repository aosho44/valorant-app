import { AgentCardDiv, ImageCard } from './AgentCard.styles';
import { Link } from 'react-router-dom';

import React from 'react';

function AgentCards(props) {
	const { data } = props;

	return (
		<AgentCardDiv>
			<Link to={`/agents/${data.uuid}`}>
				<ImageCard src={data.displayIcon} alt={data.displayName} />
			</Link>
		</AgentCardDiv>
	);
}

export { AgentCards };
