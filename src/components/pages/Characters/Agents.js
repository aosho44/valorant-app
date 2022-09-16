import React from 'react';
import { useSelector } from 'react-redux';
import { getSingleAgents } from '../../features/agents/agentSlice';
import { AgentCards } from '../../styles/agentStyle/AgentCard';
import { ErrorCards } from '../../styles/errorStyle/ErrorCard';
import { AgentContainer } from '../../styles/agentStyle/AgentCard.styles';

function Agents() {
	const agents = useSelector(getSingleAgents);

	let renderAgents = '';

	renderAgents =
		agents?.payload?.status === 200 ? (
			agents.payload.data.map((agent, index) => {
				return <AgentCards key={index} data={agent} />;
			})
		) : (
			<ErrorCards>
				<h3>{agents.Error}</h3>
			</ErrorCards>
		);

	return (
		<>
			<AgentContainer>{renderAgents}</AgentContainer>
		</>
	);
}

export default Agents;
