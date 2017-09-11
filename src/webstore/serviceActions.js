class WebStoreServices {
  constructor(client) {
    this.client = client;
  }

  call(serviceId, actionId) {
    return this.client.post(`/services/${serviceId}/actions/${actionId}`);
  }
}

module.exports = WebStoreServices
