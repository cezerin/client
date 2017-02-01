class AjaxShippingMethods {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/shipping_methods', filter);
  }
}

module.exports = AjaxShippingMethods
