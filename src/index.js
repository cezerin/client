const AjaxClient = require('./ajaxClient')
const apiClient = require('./apiClient')

const ProductCategories = require('./api/product_categories')
const Products = require('./api/products')
const Sitemap = require('./api/sitemap')
const Themes = require('./api/themes')
const CustomerGroups = require('./api/customer_groups')
const Customers = require('./api/customers')
const AjaxCart = require('./api/ajax_cart')
const Orders = require('./api/orders')
const OrderStatuses = require('./api/order_statuses')
const ShippingMethods = require('./api/shipping_methods')
const PaymentMethods = require('./api/payment_methods')
const AjaxShippingMethods = require('./api/ajax_shipping_methods')
const AjaxPaymentMethods = require('./api/ajax_payment_methods')
const Countries = require('./api/countries')
const Currencies = require('./api/currencies')
const Text = require('./api/text')
const Settings = require('./api/settings')
const CheckoutFields = require('./api/checkout_fields')
const Pages = require('./api/pages')

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
    api.countries = new Countries(apiClient);
    api.currencies = new Currencies(apiClient);
    api.text = new Text(apiClient);
    api.settings = new Settings(apiClient);
    api.checkout_fields = new CheckoutFields(apiClient);
    api.pages = new Pages(apiClient);
};

api.initAjax = (baseUrl) => {
    let ajaxClient = new AjaxClient(baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl);
    api.ajax = {};
    api.ajax.products = new Products(ajaxClient);
    api.ajax.product_categories = new ProductCategories(ajaxClient);
    api.ajax.sitemap = new Sitemap(ajaxClient);
    api.ajax.cart = new AjaxCart(ajaxClient);
    api.ajax.countries = new Countries(ajaxClient);
    api.ajax.currencies = new Currencies(ajaxClient);
    api.ajax.shipping_methods = new AjaxShippingMethods(ajaxClient);
    api.ajax.payment_methods = new AjaxPaymentMethods(ajaxClient);
};

module.exports = api;
