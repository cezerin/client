const ProductCategories = require('./api/products/categories');
const Sitemap = require('./api/sitemap');
const client = require('./client');

let api = {};
api.products = {};
api.authorize = (baseUrl, user, pass) => { return client.authorize(baseUrl, '/authorize', user, pass); };
api.init = (baseUrl, language, token) => {
  client.init(baseUrl, language, token);
  api.token = client.token;
  api.products.categories = new ProductCategories(client);
  api.sitemap = new Sitemap(client);
};

module.exports = api;
