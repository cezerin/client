export default class WebStoreServices {
	constructor(client) {
		this.client = client;
	}

	list(serviceId) {
		return this.client.get(`/services/${serviceId}/logs`);
	}
}
