import fetch from 'isomorphic-fetch';
import queryString from 'query-string';

export default class ApiClient {
	constructor(options) {
		this.baseUrl = options.baseUrl;
		this.token = options.token;
	}

	static authorize = (baseUrl, endpoint, email) => {
		const config = {
			credentials: 'same-origin',
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Encoding': 'gzip, deflate'
			},
			body: JSON.stringify({ email })
		};
		return fetch(baseUrl + endpoint, config).then(
			ApiClient.returnStatusAndJson
		);
	};

	static returnStatusAndJson = response =>
		response
			.json()
			.then(json => ({ status: response.status, json }))
			.catch(() => ({ status: response.status, json: null }));

	getConfig(method, data) {
		const config = {
			credentials: 'same-origin',
			method,
			headers: {
				'Content-Type': 'application/json',
				'Accept-Encoding': 'gzip, deflate',
				Authorization: `Bearer ${this.token}`
			}
		};

		if (data) {
			config.body = JSON.stringify(data);
		}
		return config;
	}

	postFormDataConfig(formData) {
		const config = {
			credentials: 'same-origin',
			method: 'post',
			body: formData,
			headers: {
				Authorization: `Bearer ${this.token}`
			}
		};

		return config;
	}

	get(endpoint, filter) {
		return fetch(
			`${this.baseUrl}${endpoint}?${queryString.stringify(filter)}`,
			this.getConfig('get')
		).then(ApiClient.returnStatusAndJson);
	}

	post(endpoint, data) {
		return fetch(this.baseUrl + endpoint, this.getConfig('post', data)).then(
			ApiClient.returnStatusAndJson
		);
	}

	put(endpoint, data) {
		return fetch(this.baseUrl + endpoint, this.getConfig('put', data)).then(
			ApiClient.returnStatusAndJson
		);
	}

	delete(endpoint) {
		return fetch(this.baseUrl + endpoint, this.getConfig('delete')).then(
			ApiClient.returnStatusAndJson
		);
	}

	postFormData(endpoint, formData) {
		return fetch(
			this.baseUrl + endpoint,
			this.postFormDataConfig(formData)
		).then(ApiClient.returnStatusAndJson);
	}
}
