class WebStoreAccount {
  constructor(client) {
    this.client = client;
  }

  retrieve() {
    return this.client.get('/account');
  }

  update(data) {
    return this.client.put('/account', data);
  }

  updateDeveloper(data) {
    return this.client.put('/account/developer', data);
  }
}

module.exports = WebStoreAccount
