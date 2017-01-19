const ProductCategories = require('./api/product_categories')
const Products = require('./api/products')
const Sitemap = require('./api/sitemap')
const Themes = require('./api/themes')
const CustomerGroups = require('./api/customer_groups')
const Customers = require('./api/customers')
const Orders = require('./api/orders')
const OrderStatuses = require('./api/order_statuses')
const ShippingMethods = require('./api/shipping_methods')
const PaymentMethods = require('./api/payment_methods')
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
    api.product_categories = new ProductCategories(apiClient);
    api.customers = new Customers(apiClient);
    api.orders = new Orders(apiClient);
    api.order_statuses = new OrderStatuses(apiClient);
    api.shipping_methods = new ShippingMethods(apiClient);
    api.payment_methods = new PaymentMethods(apiClient);
    api.customer_groups = new CustomerGroups(apiClient);
    api.sitemap = new Sitemap(apiClient);
    api.themes = new Themes(apiClient);
};

api.initAjax = (baseUrl) => {
    let ajaxClient = new AjaxClient(baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl);
    api.ajax = {};
    api.ajax.products = new Products(ajaxClient);
    api.ajax.product_categories = new ProductCategories(ajaxClient);
    api.ajax.sitemap = new Sitemap(ajaxClient);
};

module.exports = api;
