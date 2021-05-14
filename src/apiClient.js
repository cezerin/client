import fetch from 'cross-fetch';
import RestClient from './restClient';

export default class ApiClient extends RestClient {
	static authorize = (baseUrl, email, password) => {
		const config = {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		};
		return fetch(`${baseUrl}/authorize`, config).then(
			RestClient.returnStatusAndJson
		);
	};
}
