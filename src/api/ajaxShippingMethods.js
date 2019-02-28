export default class AjaxShippingMethods {
	constructor(client) {
		this.client = client;
	}

	list() {
		return this.client.get('/shipping_methods');
	}

	getSubsidiaries() {
		return this.client.get('/subsidiaries');
	}
}
