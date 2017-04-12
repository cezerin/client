class OrderStatuses {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/order_statuses', filter);
  }

  retrieve(id, filter) {
    return this.client.get(`/order_statuses/${id}`, filter);
  }

  create(data) {
    return this.client.post(`/order_statuses`, data);
  }

  update(id, data) {
    return this.client.put(`/order_statuses/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/order_statuses/${id}`);
  }
}

module.exports = OrderStatuses
