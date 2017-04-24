class ProductImages {
  constructor(client) {
    this.client = client;
  }

  list(productId) {
    return this.client.get(`/products/${productId}/images`);
  }

  upload(productId, formData) {
    return this.client.postFormData(`/products/${productId}/images`, formData);
  }

  delete(productId, imageId) {
    return this.client.delete(`/products/${productId}/images/${imageId}`);
  }
}

module.exports = ProductImages
