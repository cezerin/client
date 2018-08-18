export default class AjaxPaymentMethods {
	constructor(client) {
		this.client = client;
	}

	list() {
		return this.client.get('/payment_methods');
	}
}
