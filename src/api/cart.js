class Cart {
  constructor(client) {
    this.client = client;
  }

  retrieve(cookie) {
    return this.client.get(`/cart`, null, cookie);
  }

  create(data) {
    return this.client.post(`/cart`, data);
  }

  update(data) {
    return this.client.put(`/cart`, data);
  }

  recalculate() {
    return this.client.put(`/cart/recalculate`);
  }

  updateBillingAddress(address) {
    return this.client.put(`/cart/billing_address`, address);
  }

  updateShippingAddress(address) {
    return this.client.put(`/cart/shipping_address`, address);
  }

  addItem(data) {
    return this.client.post(`/cart/items`, data);
  }

  updateItem(item_id, data) {
    return this.client.put(`/cart/items/${item_id}`, data);
  }

  deleteItem(item_id) {
    return this.client.delete(`/cart/items/${item_id}`);
  }
}

module.exports = Cart
