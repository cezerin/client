class Redirects {
  constructor(client) {
    this.client = client;
  }

  list() {
    return this.client.get('/redirects');
  }

  retrieve(id) {
    return this.client.get(`/redirects/${id}`);
  }

  create(data) {
    return this.client.post(`/redirects`, data);
  }

  update(id, data) {
    return this.client.put(`/redirects/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/redirects/${id}`);
  }
}

module.exports = Redirects
