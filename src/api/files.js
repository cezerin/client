class Files {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/files', filter);
  }

  upload(formData) {
    return this.client.postFormData('/files', formData);
  }

  delete(fileName) {
    return this.client.delete(`/files/${fileName}`);
  }
}

module.exports = Files
