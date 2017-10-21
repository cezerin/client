class Files {
  constructor(client) {
    this.client = client;
  }

  upload(formData) {
    return this.client.postFormData('/files', formData);
  }

  delete(fileName) {
    return this.client.delete(`/files/${fileName}`);
  }
}

module.exports = Files
