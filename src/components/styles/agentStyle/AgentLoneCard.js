import {
	AgentCardDiv,
	ImageCard,
	DescriptionCard,
	DescriptionText,
	AbilityCard,
	AbilityImage,
	AbilityText,
	AbilityRow,
} from './AgentLoneCard.styles';

import React from 'react';

function AgentsLoneCard(props) {
	const { data } = props;

	return (
		<AgentCardDiv>
			<ImageCard src={data.fullPortrait} alt={data.displayName} />
			<DescriptionCard>
				<DescriptionText>{data.description}</DescriptionText>
			</DescriptionCard>
			<AbilityCard>
				<AbilityRow>
					<AbilityImage>{data.abilities.slot}</AbilityImage>
				</AbilityRow>
				<AbilityText></AbilityText>
			</AbilityCard>
		</AgentCardDiv>
	);
}

export { AgentsLoneCard };
