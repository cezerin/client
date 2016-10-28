class ProductCategories {
  constructor(client) {
    this.client = client;
  }

  list() {
    return this.client.get('/products/categories');
  }

  retrieve(id) {
    return this.client.get(`/products/categories/${id}`);
  }

  create(data) {
    return this.client.post(`/products/categories`, data);
  }

  update(id, data) {
    return this.client.put(`/products/categories/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/products/categories/${id}`);
  }

  uploadImage(data) {
    throw 'Not implemented';
    //return this.client.post(`/products/categories/${id}`, data);
  }

  deleteImage(id) {
    return this.client.delete(`/products/categories/${id}/image`);
  }
}

module.exports = ProductCategories;
