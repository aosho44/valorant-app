import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsyncAgentDetails } from '../../features/agents/agentSlice';
import SingleAgents from './SingleAgents';
import Header from '../Header/Header';

function SingleAgentsView() {
	const { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncAgentDetails(id));
	}, [dispatch, id]);

	return (
		<>
			<Header />
			<SingleAgents />
		</>
	);
}

export default SingleAgentsView;
