class CustomerGroups {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/customer_groups', filter);
  }

  retrieve(id, filter) {
    return this.client.get(`/customer_groups/${id}`, filter);
  }

  create(data) {
    return this.client.post(`/customer_groups`, data);
  }

  update(id, data) {
    return this.client.put(`/customer_groups/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/customer_groups/${id}`);
  }
}

module.exports = CustomerGroups
