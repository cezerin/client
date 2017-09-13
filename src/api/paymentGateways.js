class PaymentGateways {
  constructor(client) {
    this.client = client;
  }

  retrieve(gatewayName) {
    return this.client.get(`/payment_gateways/${gatewayName}`);
  }

  update(gatewayName, data) {
    return this.client.put(`/payment_gateways/${gatewayName}`, data);
  }
}

module.exports = PaymentGateways
