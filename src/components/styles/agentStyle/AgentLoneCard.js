import {
	AgentCardDiv,
	ImageCard,
	DescriptionCard,
	DescriptionText,
	AbilityCard,
	AbilityText,
	AbilityRow,
	AbilityImage,
} from './AgentLoneCard.styles';

import React from 'react';

function AgentsLoneCard(props) {
	const { data } = props;
	// const { abilities:{} } = data;

	const ability = Object.values(data.abilities[0].displayName);
	console.log(ability);

	return (
		<AgentCardDiv>
			<ImageCard src={data.fullPortrait} alt={data.displayName} />
			<DescriptionCard>
				<DescriptionText>{data.description}</DescriptionText>
				<AbilityCard>
					<AbilityRow>
						<AbilityImage src={data.abilities[0].displayIcon} alt="" />
						<AbilityImage src={data.abilities[1].displayIcon} alt="" />
						<AbilityImage src={data.abilities[2].displayIcon} alt="" />
						<AbilityImage src={data.abilities[3].displayIcon} alt="" />
					</AbilityRow>
					<AbilityText>{data.abilities[0].displayName}</AbilityText>
					<AbilityText>{data.abilities[1].displayName}</AbilityText>
					<AbilityText>{data.abilities[2].displayName}</AbilityText>
					<AbilityText>{data.abilities[3].displayName}</AbilityText>
				</AbilityCard>
			</DescriptionCard>
		</AgentCardDiv>
	);
}

export { AgentsLoneCard };
