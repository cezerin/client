export default class OrderTransactions {
	constructor(client) {
		this.client = client;
	}

	create(orderId, data) {
		return this.client.post(`/orders/${orderId}/transactions`, data);
	}

	update(orderId, transactionId, data) {
		return this.client.put(
			`/orders/${orderId}/transactions/${transactionId}`,
			data
		);
	}

	delete(orderId, transactionId) {
		return this.client.delete(
			`/orders/${orderId}/transactions/${transactionId}`
		);
	}
}
