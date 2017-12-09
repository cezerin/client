class AppSettings {
  constructor(client) {
    this.client = client;
  }

  retrieve(appKey) {
    return this.client.get(`/apps/${appKey}/settings`);
  }

  update(appKey, data) {
    return this.client.put(`/apps/${appKey}/settings`, data);
  }
}

module.exports = AppSettings
