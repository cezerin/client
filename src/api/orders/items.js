class OrderItems {
  constructor(client) {
    this.client = client;
  }

  create(order_id, data) {
    return this.client.post(`/orders/${order_id}/items`, data);
  }

  update(order_id, item_id, data) {
    return this.client.put(`/orders/${order_id}/items/${item_id}`, data);
  }

  delete(order_id, item_id) {
    return this.client.delete(`/orders/${order_id}/items/${item_id}`);
  }
}

module.exports = OrderItems
