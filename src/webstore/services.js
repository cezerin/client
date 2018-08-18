export default class WebStoreServices {
	constructor(client) {
		this.client = client;
		this.resourceUrl = '/services';
	}

	list(filter) {
		return this.client.get(this.resourceUrl, filter);
	}

	retrieve(id) {
		return this.client.get(`${this.resourceUrl}/${id}`);
	}

	enable(id) {
		return this.client.post(`${this.resourceUrl}/${id}/enable`);
	}

	disable(id) {
		return this.client.post(`${this.resourceUrl}/${id}/disable`);
	}
}
