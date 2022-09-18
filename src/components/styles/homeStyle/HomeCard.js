import { ButtonDiv, HomeButton, HomeDiv } from './Home.styles';
import React from 'react';
import { Link } from 'react-router-dom';

function HomeCard() {
	return (
		<HomeDiv>
			<ButtonDiv>
				<Link to={`/`}>
					<HomeButton>Home</HomeButton>
				</Link>
				<Link to={`/agents`}>
					<HomeButton>Agents</HomeButton>
				</Link>
				<Link to={`/maps`}>
					<HomeButton>Maps</HomeButton>
				</Link>
				<Link to={`/weapons`}>
					<HomeButton>Weapons</HomeButton>
				</Link>
			</ButtonDiv>
		</HomeDiv>
	);
}

export { HomeCard };
