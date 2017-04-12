class OrderDiscounts {
  constructor(client) {
    this.client = client;
  }

  create(order_id, data) {
    return this.client.post(`/orders/${order_id}/discounts`, data);
  }

  update(order_id, discount_id, data) {
    return this.client.put(`/orders/${order_id}/discounts/${discount_id}`, data);
  }

  delete(order_id, discount_id) {
    return this.client.delete(`/orders/${order_id}/discounts/${discount_id}`);
  }
}

module.exports = OrderDiscounts
