export default class AjaxShippingMethods {
	constructor(client) {
		this.client = client;
	}

	list() {
		return this.client.get('/shipping_methods');
	}

	prescriptions() {
		return this.client.get('/shipping_methods/prescriptions');
	}

	getSubsidiaries() {
		return this.client.get('/subsidiaries');
	}
}
