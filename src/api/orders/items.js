export default class OrderItems {
	constructor(client) {
		this.client = client;
	}

	create(orderId, data) {
		return this.client.post(`/orders/${orderId}/items`, data);
	}

	update(orderId, itemId, data) {
		return this.client.put(`/orders/${orderId}/items/${itemId}`, data);
	}

	delete(orderId, itemId) {
		return this.client.delete(`/orders/${orderId}/items/${itemId}`);
	}
}
