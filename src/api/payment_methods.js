class PaymentMethods {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/payment_methods', filter);
  }

  retrieve(id, filter) {
    return this.client.get(`/payment_methods/${id}`, filter);
  }

  create(data) {
    return this.client.post(`/payment_methods`, data);
  }

  update(id, data) {
    return this.client.put(`/payment_methods/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/payment_methods/${id}`);
  }
}

module.exports = PaymentMethods
