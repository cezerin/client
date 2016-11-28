import ProductCategories from './api/products/categories'
import Products from './api/products/products'
import Sitemap from './api/sitemap'
import AjaxClient from './ajaxClient'
import apiClient from './apiClient'

const fixBaseUrl = (baseUrl) => baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

let api = {};
api.ajax = {};
api.authorize = (baseUrl, user, pass) => { return apiClient.authorize(fixBaseUrl(baseUrl), '/authorize', user, pass); };

api.init = (baseUrl, token) => {
  apiClient.init(fixBaseUrl(baseUrl), token);
  api.token = apiClient.token;
  api.products = new Products(apiClient);
  api.products.categories = new ProductCategories(apiClient);
  api.sitemap = new Sitemap(apiClient);
};

api.initAjax = (baseUrl) => {
  const ajaxClient = new AjaxClient(fixBaseUrl(baseUrl));
  api.ajax.products = new Products(ajaxClient);
  api.ajax.products.categories = new ProductCategories(ajaxClient);
  api.ajax.sitemap = new Sitemap(ajaxClient);
};

export default api
