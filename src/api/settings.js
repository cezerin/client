class Settings {
  constructor(client) {
    this.client = client;
  }

  retrieve() {
    return this.client.get('/settings');
  }

  update(data) {
    return this.client.put('/settings', data);
  }

  retrieveEmailSettings() {
    return this.client.get('/settings/email');
  }

  updateEmailSettings(data) {
    return this.client.put('/settings/email', data);
  }

  retrieveEmailTemplate(name) {
    return this.client.get(`/settings/email/templates/${name}`);
  }

  updateEmailTemplate(name, data) {
    return this.client.put(`/settings/email/templates/${name}`, data);
  }

  retrieveCheckoutField(name) {
    return this.client.get(`/settings/checkout/fields/${name}`);
  }

  updateCheckoutField(name, data) {
    return this.client.put(`/settings/checkout/fields/${name}`, data);
  }
}

module.exports = Settings
