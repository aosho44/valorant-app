import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsyncAgentDetails } from '../../features/agents/agentSlice';
import SingleAgents from './SingleAgents';

function SingleAgentsView() {
	const { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncAgentDetails(id));
	}, [dispatch, id]);

	return (
		<>
			<SingleAgents />
		</>
	);
}

export default SingleAgentsView;
