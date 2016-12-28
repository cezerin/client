class Customers {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/customers', filter);
  }

  retrieve(id, filter) {
    return this.client.get(`/customers/${id}`, filter);
  }

  create(data) {
    return this.client.post(`/customers`, data);
  }

  update(id, data) {
    return this.client.put(`/customers/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/customers/${id}`);
  }
}

module.exports = Customers
