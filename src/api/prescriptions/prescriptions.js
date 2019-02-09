export default class Prescriptions {
	constructor(client) {
		this.client = client;
		this.resourceUrl = '/prescriptions';
	}

	list(filter) {
		return this.client.get(this.resourceUrl, filter);
	}

	retrieve(prescriptionId, filter) {
		return this.client.get(`${this.resourceUrl}/${prescriptionId}`, filter);
	}

	create(data) {
		return this.client.post(this.resourceUrl, data);
	}

	update(prescriptionId, data) {
		return this.client.put(`${this.resourceUrl}/${prescriptionId}`, data);
	}

	delete(prescriptionId) {
		return this.client.delete(`${this.resourceUrl}/${prescriptionId}`);
	}

	estimate(prescriptionId, data) {
		return this.client.put(
			`${this.resourceUrl}/${prescriptionId}/estimate`,
			data
		);
	}

	checkout(prescriptionId) {
		return this.client.put(`${this.resourceUrl}/${prescriptionId}/checkout`);
	}

	cancel(prescriptionId) {
		return this.client.put(`${this.resourceUrl}/${prescriptionId}/cancel`);
	}

	close(prescriptionId) {
		return this.client.put(`${this.resourceUrl}/${prescriptionId}/close`);
	}

	updateBillingAddress(prescriptionId, address) {
		return this.client.put(
			`${this.resourceUrl}/${prescriptionId}/billing_address`,
			address
		);
	}

	updateShippingAddress(prescriptionId, address) {
		return this.client.put(
			`${this.resourceUrl}/${prescriptionId}/shipping_address`,
			address
		);
	}

	getPaymentFormSettings(prescriptionId) {
		return this.client.get(
			`${this.resourceUrl}/${prescriptionId}/payment_form_settings`
		);
	}

	confirm(prescriptionId) {
		return this.client.put(`${this.resourceUrl}/${prescriptionId}/confirm`);
	}
}
