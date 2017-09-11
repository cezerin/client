class Orders {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/orders', filter);
  }

  retrieve(order_id, filter) {
    return this.client.get(`/orders/${order_id}`, filter);
  }

  create(data) {
    return this.client.post(`/orders`, data);
  }

  update(order_id, data) {
    return this.client.put(`/orders/${order_id}`, data);
  }

  delete(order_id) {
    return this.client.delete(`/orders/${order_id}`);
  }

  recalculate(order_id) {
    return this.client.put(`/orders/${order_id}/recalculate`);
  }

  checkout(order_id) {
    return this.client.put(`/orders/${order_id}/checkout`);
  }

  cancel(order_id) {
    return this.client.put(`/orders/${order_id}/cancel`);
  }

  close(order_id) {
    return this.client.put(`/orders/${order_id}/close`);
  }

  updateBillingAddress(order_id, address) {
    return this.client.put(`/orders/${order_id}/billing_address`, address);
  }

  updateShippingAddress(order_id, address) {
    return this.client.put(`/orders/${order_id}/shipping_address`, address);
  }

  getPaymentFormSettings(order_id) {
    return this.client.get(`/orders/${order_id}/payment_form_settings`);
  }
}

module.exports = Orders
