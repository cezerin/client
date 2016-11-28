const ProductCategories = require('./api/products/categories')
const Products = require('./api/products/products')
const Sitemap = require('./api/sitemap')
const AjaxClient = require('./ajaxClient')
const apiClient = require('./apiClient')

let api = {};
api.products = {};

api.authorize = (baseUrl, user, pass) => {
    return apiClient.authorize(baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl, '/authorize', user, pass);
};

api.init = (baseUrl, token) => {
    apiClient.init(baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl, token);
    api.token = apiClient.token;
    api.products = new Products(apiClient);
    api.products.categories = new ProductCategories(apiClient);
    api.sitemap = new Sitemap(apiClient);
};

api.initAjax = (baseUrl) => {
    let ajaxClient = new AjaxClient(baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl);
    api.ajax = {};
    api.ajax.products = new Products(ajaxClient);
    api.ajax.products.categories = new ProductCategories(ajaxClient);
    api.ajax.sitemap = new Sitemap(ajaxClient);
};

module.exports = api;
