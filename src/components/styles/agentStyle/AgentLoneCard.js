import {
	AgentCardDiv,
	ImageCard,
	DescriptionCard,
	DescriptionText,
	AbilityCard,
	AbilityText,
	AbilityRow,
	AbilityImage,
	AbilityImageText,
	BackgroundImageDiv,
	AgentsName,
} from './AgentLoneCard.styles';

import React from 'react';

function AgentsLoneCard(props) {
	const { data } = props;
	const bg1 = '#' + data.backgroundGradientColors[1];
	const bg2 = '#' + data.backgroundGradientColors[2];

	return (
		<AgentCardDiv bgColour1={bg1}>
			<BackgroundImageDiv image={data.background}>
				<ImageCard src={data.fullPortrait} alt={data.displayName} />
			</BackgroundImageDiv>
			<DescriptionCard bgColour1={bg2}>
				<AgentsName>{data.displayName}</AgentsName>
				<DescriptionText>{data.description}</DescriptionText>

				<AbilityCard>
					<AbilityRow>
						<AbilityImageText>
							<AbilityImage src={data.abilities[0].displayIcon} alt="" />
							<AbilityText>{data.abilities[0].displayName}</AbilityText>
						</AbilityImageText>
						<AbilityImageText>
							<AbilityImage src={data.abilities[1].displayIcon} alt="" />
							<AbilityText>{data.abilities[1].displayName}</AbilityText>
						</AbilityImageText>
						<AbilityImageText>
							<AbilityImage src={data.abilities[2].displayIcon} alt="" />
							<AbilityText>{data.abilities[2].displayName}</AbilityText>
						</AbilityImageText>
						<AbilityImageText>
							<AbilityImage src={data.abilities[3].displayIcon} alt="" />
							<AbilityText>{data.abilities[3].displayName}</AbilityText>
						</AbilityImageText>
					</AbilityRow>
					<AbilityImageText></AbilityImageText>
				</AbilityCard>
			</DescriptionCard>
		</AgentCardDiv>
	);
}

export { AgentsLoneCard };
