const AjaxClient = require('./ajaxClient');
const ApiClient = require('./apiClient');
const WebStoreClient = require('./webstoreClient');

const ProductCategories = require('./api/productCategories');
const Products = require('./api/products/products');
const ProductOptions = require('./api/products/options');
const ProductOptionValues = require('./api/products/optionValues');
const ProductVariants = require('./api/products/variants');
const ProductImages = require('./api/products/images');
const Sitemap = require('./api/sitemap');
const Theme = require('./api/theme/theme');
const ThemeSettings = require('./api/theme/settings');
const ThemeAssets = require('./api/theme/assets');
const ThemePlaceholders = require('./api/theme/placeholders');
const CustomerGroups = require('./api/customerGroups');
const Customers = require('./api/customers');
const AjaxCart = require('./api/ajaxCart');
const Orders = require('./api/orders/orders');
const OrderDiscounts = require('./api/orders/discounts');
const OrderTransactions = require('./api/orders/transactions');
const OrderItems = require('./api/orders/items');
const OrderStatuses = require('./api/orders/statuses');
const ShippingMethods = require('./api/shippingMethods');
const PaymentMethods = require('./api/paymentMethods');
const PaymentGateways = require('./api/paymentGateways');
const AjaxShippingMethods = require('./api/ajaxShippingMethods');
const AjaxPaymentMethods = require('./api/ajaxPaymentMethods');
const AjaxPaymentFormSettings = require('./api/ajaxPaymentFormSettings');
const Countries = require('./api/countries');
const Currencies = require('./api/currencies');
const Text = require('./api/text');
const Settings = require('./api/settings');
const CheckoutFields = require('./api/checkoutFields');
const Pages = require('./api/pages');
const Tokens = require('./api/tokens');
const Redirects = require('./api/redirects');
const Webhooks = require('./api/webhooks');
const Files = require('./api/files');
const AppSettings = require('./api/apps/settings');
const WebStoreAccount = require('./webstore/account');
const WebStoreServices = require('./webstore/services');
const WebStoreServiceSettings = require('./webstore/serviceSettings');
const WebStoreServiceActions = require('./webstore/serviceActions');
const WebStoreServiceLogs = require('./webstore/serviceLogs');

class Client {
	constructor(options) {
		if (!options) {
			options = {};
		}

		this.apiBaseUrl = options.apiBaseUrl || '/api/v1';
		this.apiToken = options.apiToken;
		this.ajaxBaseUrl = options.ajaxBaseUrl || '/ajax';
		this.webstoreToken = options.webstoreToken;

		const apiClient = new ApiClient({
			baseUrl: this.apiBaseUrl,
			token: this.apiToken
		});
		const ajaxClient = new AjaxClient({ baseUrl: this.ajaxBaseUrl });
		const webstoreClient = new WebStoreClient({ token: this.webstoreToken });

		this.products = new Products(apiClient);
		this.products.options = new ProductOptions(apiClient);
		this.products.options.values = new ProductOptionValues(apiClient);
		this.products.variants = new ProductVariants(apiClient);
		this.products.images = new ProductImages(apiClient);
		this.productCategories = new ProductCategories(apiClient);
		this.customers = new Customers(apiClient);
		this.orders = new Orders(apiClient);
		this.orders.discounts = new OrderDiscounts(apiClient);
		this.orders.transactions = new OrderTransactions(apiClient);
		this.orders.items = new OrderItems(apiClient);
		this.orderStatuses = new OrderStatuses(apiClient);
		this.shippingMethods = new ShippingMethods(apiClient);
		this.paymentMethods = new PaymentMethods(apiClient);
		this.paymentGateways = new PaymentGateways(apiClient);
		this.customerGroups = new CustomerGroups(apiClient);
		this.sitemap = new Sitemap(apiClient);
		this.theme = new Theme(apiClient);
		this.theme.settings = new ThemeSettings(apiClient);
		this.theme.assets = new ThemeAssets(apiClient);
		this.theme.placeholders = new ThemePlaceholders(apiClient);
		this.countries = new Countries(apiClient);
		this.currencies = new Currencies(apiClient);
		this.text = new Text(apiClient);
		this.settings = new Settings(apiClient);
		this.checkoutFields = new CheckoutFields(apiClient);
		this.pages = new Pages(apiClient);
		this.tokens = new Tokens(apiClient);
		this.redirects = new Redirects(apiClient);
		this.webhooks = new Webhooks(apiClient);
		this.files = new Files(apiClient);
		this.apps = {};
		this.apps.settings = new AppSettings(apiClient);

		this.ajax = {};
		this.ajax.products = new Products(ajaxClient);
		this.ajax.sitemap = new Sitemap(ajaxClient);
		this.ajax.cart = new AjaxCart(ajaxClient);
		this.ajax.countries = new Countries(ajaxClient);
		this.ajax.currencies = new Currencies(ajaxClient);
		this.ajax.shippingMethods = new AjaxShippingMethods(ajaxClient);
		this.ajax.paymentMethods = new AjaxPaymentMethods(ajaxClient);
		this.ajax.paymentFormSettings = new AjaxPaymentFormSettings(ajaxClient);
		this.ajax.pages = new Pages(ajaxClient);

		this.webstore = {};
		this.webstore.account = new WebStoreAccount(webstoreClient);
		this.webstore.services = new WebStoreServices(webstoreClient);
		this.webstore.services.settings = new WebStoreServiceSettings(
			webstoreClient
		);
		this.webstore.services.actions = new WebStoreServiceActions(webstoreClient);
		this.webstore.services.logs = new WebStoreServiceLogs(webstoreClient);
	}

	static authorize = (baseUrl, email) => {
		return ApiClient.authorize(baseUrl, '/authorize', email);
	};

	static authorizeInWebStore = (email, admin_url) => {
		return WebStoreClient.authorize(email, admin_url);
	};
}

module.exports = Client;
