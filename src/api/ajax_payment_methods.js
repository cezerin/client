class AjaxPaymentMethods {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/payment_methods', filter);
  }
}

module.exports = AjaxPaymentMethods
