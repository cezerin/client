class ThemePlaceholders {
  constructor(client) {
    this.client = client;
  }

  list() {
    return this.client.get('/theme/placeholders');
  }

  retrieve(placeholderKey) {
    return this.client.get(`/theme/placeholders/${placeholderKey}`);
  }

  create(data) {
    return this.client.post(`/theme/placeholders`, data);
  }

  update(placeholderKey, data) {
    return this.client.put(`/theme/placeholders/${placeholderKey}`, data);
  }

  delete(placeholderKey) {
    return this.client.delete(`/theme/placeholders/${placeholderKey}`);
  }
}

module.exports = ThemePlaceholders
