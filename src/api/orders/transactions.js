class OrderTransactions {
  constructor(client) {
    this.client = client;
  }

  create(order_id, data) {
    return this.client.post(`/orders/${order_id}/transactions`, data);
  }

  update(customer_id, transaction_id, data) {
    return this.client.put(`/orders/${order_id}/transactions/${transaction_id}`, data);
  }

  delete(order_id, transaction_id) {
    return this.client.delete(`/orders/${order_id}/transactions/${transaction_id}`);
  }


}

module.exports = OrderTransactions
