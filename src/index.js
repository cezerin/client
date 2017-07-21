const AjaxClient = require('./ajaxClient')
const apiClient = require('./apiClient')
const webstoreClient = require('./webstoreClient')

const ProductCategories = require('./api/productCategories')
const Products = require('./api/products/products')
const ProductOptions = require('./api/products/options')
const ProductOptionValues = require('./api/products/optionValues')
const ProductVariants = require('./api/products/variants')
const ProductImages = require('./api/products/images')
const Sitemap = require('./api/sitemap')
const Themes = require('./api/themes')
const CustomerGroups = require('./api/customerGroups')
const Customers = require('./api/customers')
const AjaxCart = require('./api/ajaxCart')
const Orders = require('./api/orders/orders')
const OrderDiscounts = require('./api/orders/discounts')
const OrderTransactions = require('./api/orders/transactions')
const OrderItems = require('./api/orders/items')
const OrderStatuses = require('./api/orders/statuses')
const ShippingMethods = require('./api/shippingMethods')
const PaymentMethods = require('./api/paymentMethods')
const AjaxShippingMethods = require('./api/ajaxShippingMethods')
const AjaxPaymentMethods = require('./api/ajaxPaymentMethods')
const Countries = require('./api/countries')
const Currencies = require('./api/currencies')
const Text = require('./api/text')
const Settings = require('./api/settings')
const CheckoutFields = require('./api/checkoutFields')
const Pages = require('./api/pages')
const Tokens = require('./api/tokens')
const WebStoreAccount = require('./webstore/account')

let api = {};
api.products = {};

api.authorize = (baseUrl, email) => {
    return apiClient.authorize(baseUrl, '/authorize', email);
};

api.init = (baseUrl, token) => {
    apiClient.init(baseUrl, token);
    api.token = apiClient.token;
    api.products = new Products(apiClient);
    api.products.options = new ProductOptions(apiClient);
    api.products.options.values = new ProductOptionValues(apiClient);
    api.products.variants = new ProductVariants(apiClient);
    api.products.images = new ProductImages(apiClient);
    api.productCategories = new ProductCategories(apiClient);
    api.customers = new Customers(apiClient);
    api.orders = new Orders(apiClient);
    api.orders.discounts = new OrderDiscounts(apiClient);
    api.orders.transactions = new OrderTransactions(apiClient);
    api.orders.items = new OrderItems(apiClient);
    api.orderStatuses = new OrderStatuses(apiClient);
    api.shippingMethods = new ShippingMethods(apiClient);
    api.paymentMethods = new PaymentMethods(apiClient);
    api.customerGroups = new CustomerGroups(apiClient);
    api.sitemap = new Sitemap(apiClient);
    api.themes = new Themes(apiClient);
    api.countries = new Countries(apiClient);
    api.currencies = new Currencies(apiClient);
    api.text = new Text(apiClient);
    api.settings = new Settings(apiClient);
    api.checkoutFields = new CheckoutFields(apiClient);
    api.pages = new Pages(apiClient);
    api.tokens = new Tokens(apiClient)
};

api.initAjax = (baseUrl) => {
    let ajaxClient = new AjaxClient(baseUrl);
    api.ajax = {};
    api.ajax.products = new Products(ajaxClient);
    api.ajax.sitemap = new Sitemap(ajaxClient);
    api.ajax.cart = new AjaxCart(ajaxClient);
    api.ajax.countries = new Countries(ajaxClient);
    api.ajax.currencies = new Currencies(ajaxClient);
    api.ajax.shippingMethods = new AjaxShippingMethods(ajaxClient);
    api.ajax.paymentMethods = new AjaxPaymentMethods(ajaxClient);
    api.ajax.pages = new Pages(ajaxClient);
};

api.webstore = {};
api.webstore.authorize = (email) => webstoreClient.authorize(email);
api.webstore.signup = (email, admin_url) => webstoreClient.signup(email, admin_url);

api.webstore.init = (token) => {
    webstoreClient.init(token);
    api.webstore.token = webstoreClient.token;
    api.webstore.account = new WebStoreAccount(webstoreClient);
}

module.exports = api;
