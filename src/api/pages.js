class Pages {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/pages', filter);
  }

  retrieve(id) {
    return this.client.get(`/pages/${id}`);
  }

  create(data) {
    return this.client.post(`/pages`, data);
  }

  update(id, data) {
    return this.client.put(`/pages/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/pages/${id}`);
  }
}

module.exports = Pages
