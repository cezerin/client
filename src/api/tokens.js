class Tokens {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/security/tokens', filter);
  }

  retrieve(id) {
    return this.client.get(`/security/tokens/${id}`);
  }

  create(data) {
    return this.client.post(`/security/tokens`, data);
  }

  update(id, data) {
    return this.client.put(`/security/tokens/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/security/tokens/${id}`);
  }
}

module.exports = Tokens
