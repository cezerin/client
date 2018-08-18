export default class OrderDiscounts {
	constructor(client) {
		this.client = client;
	}

	create(orderId, data) {
		return this.client.post(`/orders/${orderId}/discounts`, data);
	}

	update(orderId, discountId, data) {
		return this.client.put(`/orders/${orderId}/discounts/${discountId}`, data);
	}

	delete(orderId, discountId) {
		return this.client.delete(`/orders/${orderId}/discounts/${discountId}`);
	}
}
