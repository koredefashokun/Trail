import config from '../../config';
import Analytics from 'appcenter-analytics';

const refreshToken = async () => {
	const response = await fetch(`${config.apiUrl}/auth/refresh-token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			grant_type: 'refresh_token',
			client_id: config.auth0ClientId,
			refreshToken
		})
	});

	Analytics.trackEvent('Refresh Token Request');

	if (!response.ok) {
		const error = await response.json();
		Analytics.trackEvent('Refresh Token Error', { error: error.message });
		// Log the user out.
		// throw new Error(error);
	}

	const data = await response.json();
	return data.token;

	// store.dispatch({
	// 	type: AUTH_REFRESH,
	// 	payload: { accessToken: tokens.access_token }
	// });

	// Return the access token.
	// return tokens.access_token;
};

const request = async (path, method, accessToken, body = {}) => {
	const options = {
		method,
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'Content-Type': 'application/json'
		}
	};

	if (method === 'POST') {
		options['body'] = JSON.stringify(body);
	}

	let response = await fetch(`${config.apiUrl}${path}`, options);

	if (response.status === 401) {
		accessToken = await refreshToken();
		options.headers.Authorization = `Bearer ${accessToken}`;

		response = await fetch(`${config.apiUrl}${path}`, options);
	}

	if (!response.ok) {
		const error = await response.json();
		await Analytics.trackEvent('API Request Error', {
			path,
			method,
			body,
			error
		});
		throw new Error(error.message);
	}

	const data = await response.json();
	return data;
};

export const get = async (path, accessToken) => {
	await Analytics.trackEvent('API GET Request', { path });
	return request(path, 'GET', accessToken);
};

export const post = async (path, accessToken, body) => {
	await Analytics.trackEvent('API POST Request', { path });
	return request(path, 'POST', accessToken, body);
};
