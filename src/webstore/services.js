class WebStoreServices {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/services', filter);
  }

  retrieve(id) {
    return this.client.get(`/services/${id}`);
  }

  enable(id) {
    return this.client.post(`/services/${id}/enable`);
  }

  disable(id) {
    return this.client.post(`/services/${id}/disable`);
  }
}

module.exports = WebStoreServices
