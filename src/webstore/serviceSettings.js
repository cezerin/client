export default class WebStoreServices {
	constructor(client) {
		this.client = client;
	}

	retrieve(id) {
		return this.client.get(`/services/${id}/settings`);
	}

	update(id, data) {
		return this.client.post(`/services/${id}/settings`, data);
	}
}
