class Products {
  constructor(client) {
    this.client = client;
  }

  list() {
    return this.client.get('/products');
  }

  retrieve(id) {
    return this.client.get(`/products/${id}`);
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

  uploadImage(productId, data) {
    throw 'Not implemented';
    //return this.client.post(`/products/${id}`, data);
  }

  deleteImage(productId, imageId) {
    return this.client.delete(`/products/${productId}/images/${imageId}`);
  }
}

module.exports = Products;
