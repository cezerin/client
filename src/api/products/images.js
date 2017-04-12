class ProductImages {
  constructor(client) {
    this.client = client;
  }

  list(productId) {
    return this.client.get(`/products/${productId}/images`);
  }

  upload(productId, data) {
    throw 'Not implemented';
    //return this.client.post(`/products/${id}`, data);
  }

  delete(productId, imageId) {
    return this.client.delete(`/products/${productId}/images/${imageId}`);
  }
}

module.exports = ProductImages
