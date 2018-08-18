export default class ProductOptions {
	constructor(client) {
		this.client = client;
	}

	list(productId) {
		return this.client.get(`/products/${productId}/options`);
	}

	retrieve(productId, optionId) {
		return this.client.get(`/products/${productId}/options/${optionId}`);
	}

	create(productId, data) {
		return this.client.post(`/products/${productId}/options`, data);
	}

	update(productId, optionId, data) {
		return this.client.put(`/products/${productId}/options/${optionId}`, data);
	}

	delete(productId, optionId) {
		return this.client.delete(`/products/${productId}/options/${optionId}`);
	}
}
