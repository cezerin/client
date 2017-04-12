class ShippingMethods {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/shipping_methods', filter);
  }

  retrieve(id, filter) {
    return this.client.get(`/shipping_methods/${id}`, filter);
  }

  create(data) {
    return this.client.post(`/shipping_methods`, data);
  }

  update(id, data) {
    return this.client.put(`/shipping_methods/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/shipping_methods/${id}`);
  }
}

module.exports = ShippingMethods
