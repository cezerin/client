class Sitemap {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/sitemap', filter);
  }

  retrieve(filter) {
    return this.client.get('/sitemap', filter);
  }
}

module.exports = Sitemap
