class Products {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/products', filter);
  }

  retrieve(id, filter) {
    return this.client.get(`/products/${id}`, filter);
  }

  create(data) {
    return this.client.post(`/products`, data);
  }

  update(id, data) {
    return this.client.put(`/products/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/products/${id}`);
  }

  skuExists(productId, sku) {
    return this.client.get(`/products/${productId}/sku`, { sku: sku });
  }

  slugExists(productId, slug) {
    return this.client.get(`/products/${productId}/slug`, { slug: slug });
  }
}

module.exports = Products
