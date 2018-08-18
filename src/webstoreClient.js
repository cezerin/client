import fetch from 'isomorphic-fetch';
import queryString from 'query-string';

export default class WebStoreClient {
	constructor(options) {
		this.baseUrl = 'https://api.cezerin.com/v1';
		this.token = options.token;
	}

	static authorize = (email, adminUrl) => {
		const config = {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Encoding': 'gzip, deflate'
			},
			body: JSON.stringify({ email, admin_url: adminUrl })
		};

		return fetch('https://api.cezerin.com/v1/account/authorize', config).then(
			WebStoreClient.returnStatusAndJson
		);
	};

	static returnStatusAndJson = response =>
		response
			.json()
			.then(json => ({ status: response.status, json }))
			.catch(() => ({ status: response.status, json: null }));

	getConfig(method, data) {
		const config = {
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
		).then(WebStoreClient.returnStatusAndJson);
	}

	post(endpoint, data) {
		return fetch(this.baseUrl + endpoint, this.getConfig('post', data)).then(
			WebStoreClient.returnStatusAndJson
		);
	}

	put(endpoint, data) {
		return fetch(this.baseUrl + endpoint, this.getConfig('put', data)).then(
			WebStoreClient.returnStatusAndJson
		);
	}

	delete(endpoint) {
		return fetch(this.baseUrl + endpoint, this.getConfig('delete')).then(
			WebStoreClient.returnStatusAndJson
		);
	}

	postFormData(endpoint, formData) {
		return fetch(
			this.baseUrl + endpoint,
			this.postFormDataConfig(formData)
		).then(WebStoreClient.returnStatusAndJson);
	}
}
