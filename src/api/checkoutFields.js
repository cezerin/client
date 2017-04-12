class CheckoutFields {
  constructor(client) {
    this.client = client;
  }

  list() {
    return this.client.get('/settings/checkout/fields');
  }

  retrieve(name) {
    return this.client.get(`/settings/checkout/fields/${name}`);
  }

  update(name, data) {
    return this.client.put(`/settings/checkout/fields/${name}`, data);
  }
}

module.exports = CheckoutFields
