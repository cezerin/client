class Orders {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/orders', filter);
  }

  retrieve(id, filter) {
    return this.client.get(`/orders/${id}`, filter);
  }

  create(data) {
    return this.client.post(`/orders`, data);
  }

  update(id, data) {
    return this.client.put(`/orders/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/orders/${id}`);
  }

  recalculate(id) {
    return this.client.put(`/orders/${id}/recalculate`);
  }

  updateBillingAddress(order_id, address) {
    return this.client.put(`/orders/${order_id}/billing_address`, data);
  }

  updateShippingAddress(order_id, address) {
    return this.client.put(`/orders/${order_id}/shipping_address`, data);
  }

  addItem(order_id, data) {
    return this.client.post(`/orders/${order_id}/items`, data);
  }

  updateItem(order_id, item_id, data) {
    return this.client.put(`/orders/${order_id}/items/${item_id}`, data);
  }

  deleteItem(order_id, item_id) {
    return this.client.delete(`/orders/${order_id}/items/${item_id}`);
  }

  addTransaction(order_id, data) {
    return this.client.post(`/orders/${order_id}/transactions`, data);
  }

  updateTransaction(customer_id, transaction_id, data) {
    return this.client.put(`/orders/${order_id}/transactions/${transaction_id}`, data);
  }

  deleteTransaction(order_id, transaction_id) {
    return this.client.delete(`/orders/${order_id}/transactions/${transaction_id}`);
  }

  addDiscount(order_id, data) {
    return this.client.post(`/orders/${order_id}/discounts`, data);
  }

  updateDiscount(order_id, discount_id, data) {
    return this.client.put(`/orders/${order_id}/discounts/${discount_id}`, data);
  }

  deleteDiscount(order_id, discount_id) {
    return this.client.delete(`/orders/${order_id}/discounts/${discount_id}`);
  }

}

module.exports = Orders
