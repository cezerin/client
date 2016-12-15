class Themes {
  constructor(client) {
    this.client = client;
  }

  exportCurrent() {
    return this.client.get('/themes/current/zip');
  }

  importAndInstall(formData) {
    return this.client.postFormData('/themes/current/zip', formData);
  }
}

module.exports = Themes
