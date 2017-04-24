class ProductCategories {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/product_categories', filter);
  }

  retrieve(id) {
    return this.client.get(`/product_categories/${id}`);
  }

  create(data) {
    return this.client.post(`/product_categories`, data);
  }

  update(id, data) {
    return this.client.put(`/product_categories/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/product_categories/${id}`);
  }

  uploadImage(categoryId, formData) {
    return this.client.postFormData(`/product_categories/${categoryId}/image`, formData);
  }

  deleteImage(id) {
    return this.client.delete(`/product_categories/${id}/image`);
  }
}

module.exports = ProductCategories
