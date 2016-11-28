class Sitemap {
  constructor(client) {
    this.client = client;
  }

  list() {
    return this.client.get('/sitemap');
  }

  retrieve(path) {
    return this.client.get(`/sitemap?path=${path}`);
  }
}

export default Sitemap
