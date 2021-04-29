export default class Orders {
	constructor(client) {
		this.client = client;
		this.resourceUrl = '/orders';
	}

	list(filter) {
		return this.client.get(this.resourceUrl, filter);
	}

	retrieve(orderId, filter) {
		return this.client.get(`${this.resourceUrl}/${orderId}`, filter);
	}

	create(data) {
		return this.client.post(this.resourceUrl, data);
	}

	update(orderId, data) {
		return this.client.put(`${this.resourceUrl}/${orderId}`, data);
	}

	delete(orderId) {
		return this.client.delete(`${this.resourceUrl}/${orderId}`);
	}

	recalculate(orderId) {
		return this.client.put(`${this.resourceUrl}/${orderId}/recalculate`);
	}

	checkout(orderId) {
		return this.client.put(`${this.resourceUrl}/${orderId}/checkout`);
	}

	cancel(orderId) {
		return this.client.put(`${this.resourceUrl}/${orderId}/cancel`);
	}

	close(orderId) {
		return this.client.put(`${this.resourceUrl}/${orderId}/close`);
	}

	updateBillingAddress(orderId, address) {
		return this.client.put(
			`${this.resourceUrl}/${orderId}/billing_address`,
			address
		);
	}

	updateAvailability(orderId, available) {
		return this.client.put(
			`${this.resourceUrl}/${orderId}/confim_availability`,
			available
		);
	}

	updateShippingAddress(orderId, address) {
		return this.client.put(
			`${this.resourceUrl}/${orderId}/shipping_address`,
			address
		);
	}

	updateSubsidiary(orderId, subsidiary) {
		return this.client.put(
			`${this.resourceUrl}/${orderId}/subsidiary`,
			subsidiary
		);
	}

	getPaymentFormSettings(orderId) {
		return this.client.get(
			`${this.resourceUrl}/${orderId}/payment_form_settings`
		);
	}

	download(dates) {
		return this.client.download(`${this.resourceUrl}/download`, dates);
	}
}
