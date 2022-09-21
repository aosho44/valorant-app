# Valorant App

[Link to the website](https://valorant-app-ayo.netlify.app/)

## What I learnt from this project

API
Redux toolkit
Styled components
Webpage responsiveness

### API

With API, I worked on a [valorant api ](https://dash.valorant-api.com/) which had multiple endpoints to my disposal. I picked the agents, maps and weapons. The first problem I encountered was fetching deeply nested objects that I could get, such as characters abilities. My work around this was doing multiple console.logs to ensure I was actually fetching the data I wanted and testing multiple script. Here is an example of how I solved one of the issues I had **"data.abilities[0].displayName"**. This is basically going through the abilities and picking the first object and then getting the display name.
I also learnt when in the network tab on the development tool, I need to make sure the url matches what I see in the Fetch/XHR when passing an argument of what is expected on the url.

```javascript
export const fetchAsyncAgents = createAsyncThunk(
	'agents/fetchAsyncAgents',
	async () => {
		const response = await agentApi.get(`?isPlayableCharacter=${true}`);
		return await response.data;
	}
);
```

What this does is shows all the characters that have true in the variable of **"isPlayableCharacter"**. Why? Because there is a character that is shown twice on the API and in order to only show one, this was the method in showing it.

Another example was making sure the UUID matches the url

```javascript
export const fetchAsyncAgentDetails = createAsyncThunk(
	'agents/fetchAsyncAgentDetails',
	async (id) => {
		const response = await agentApi.get(`${id}`);
		return await response.data;
	}
);
```

What this does is makes sure the **id** variable matches the url and it is displaying the right character that is being clicked on
