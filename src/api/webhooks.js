class Webhooks {
  constructor(client) {
    this.client = client;
  }

  list() {
    return this.client.get('/webhooks');
  }

  retrieve(id) {
    return this.client.get(`/webhooks/${id}`);
  }

  create(data) {
    return this.client.post(`/webhooks`, data);
  }

  update(id, data) {
    return this.client.put(`/webhooks/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/webhooks/${id}`);
  }
}

module.exports = Webhooks;
