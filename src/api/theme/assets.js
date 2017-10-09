class ThemeAssets {
  constructor(client) {
    this.client = client;
  }

  uploadFile(formData) {
    return this.client.postFormData('/theme/assets', formData);
  }

  deleteFile(fileName) {
    return this.client.delete(`/theme/assets/${fileName}`);
  }
}

module.exports = ThemeAssets
