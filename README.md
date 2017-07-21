# Cezerin API client library

Allows asynchronous requests to Cezerin REST API and get results with Promise.

Install with:

    npm install cezerin-client


## Initialize

```javascript
const api = require('cezerin-client');
api.init('https://website.com/api/v1', '<token>');
```

## Usage

```javascript
// get all categories
api.productCategories.list().then(({status, json}) => {
    const products = json;
    for(const product of products){
      console.log(product.name)
    }
});

// create a category
api.productCategories.create({name: 'Woman', active: true}).then(({status, json}) => {
    const category_id = json.id;
});
```

##  Error Handling

```javascript
api.productCategories.create({ nameX: 'Woman' })
.then(({status, json}) => {
  if(status === 200) {
    // success
    return json;
  } else {
    // 404 or bad request
    console.log(json)
  }
})
.catch(error => {
    console.log(error)
});
```

## Methods

* `api.init(baseUrl, token)`
* `api.authorize(baseUrl, user, pass)`
* `api.sitemap.list()`
* `api.sitemap.retrieve(path)`
* `api.productCategories.list()`
* `api.productCategories.retrieve(id)`
* `api.productCategories.create(data)`
* `api.productCategories.update(id, data)`
* `api.productCategories.delete(id)`
* `api.productCategories.uploadImage(categoryId, formData)`
* `api.productCategories.deleteImage(id)`
* api.products.list({
    - offset: 0,
    - limit: 10,
    - fields: 'id, name, price',
    - category_id: '<id>',
    - active: true,
    - discontinued: false,
    - search: '',
    - on_sale: true,
    - stock_status: 'available',
    - price_from: 0,
    - price_to: 100,
    - sku: '',
    - ids: '<id>,<id>,<id>',
    - sort: 'regular_price,-stock_quantity'
   })
* `api.products.retrieve(id)`
* `api.products.create(data)`
* `api.products.update(id, data)`
* `api.products.delete(id)`
* `api.products.skuExists(productId, sku)`
* `api.products.slugExists(productId, slug)`
* `api.products.options.list(productId)`
* `api.products.options.retrieve(productId, optionId)`
* `api.products.options.create(productId, data)`
* `api.products.options.update(productId, optionId, data)`
* `api.products.options.delete(productId, optionId)`
* `api.products.options.values.list(productId, optionId)`
* `api.products.options.values.retrieve(productId, optionId, valueId)`
* `api.products.options.values.create(productId, optionId, data)`
* `api.products.options.values.update(productId, optionId, valueId, data)`
* `api.products.options.values.delete(productId, optionId, valueId)`
* `api.products.variants.list(productId)`
* `api.products.variants.create(productId, data)`
* `api.products.variants.update(productId, variantId, data)`
* `api.products.variants.delete(productId, variantId)`
* `api.products.variants.setOption(productId, variantId, data)`
* `api.products.images.list(productId)`
* `api.products.images.update(productId, imageId, data)`
* `api.products.images.upload(productId, formData)`
* `api.products.images.delete(productId, imageId)`
* `api.themes.exportCurrent()`
* `api.themes.importAndInstall(formData)`
* `api.customers.list`
* `api.customers.retrieve`
* `api.customers.create`
* `api.customers.update`
* `api.customers.delete`
* `api.customers.createAddress`
* `api.customers.updateAddress`
* `api.customers.deleteAddress`
* `api.customers.setDefaultBillingAddress`
* `api.customers.setDefaultShippingAddress`
* `api.customerGroups.list`
* `api.customerGroups.retrieve`
* `api.customerGroups.create`
* `api.customerGroups.update`
* `api.customerGroups.delete`
* `api.orders.list`
* `api.orders.retrieve`
* `api.orders.create`
* `api.orders.update`
* `api.orders.delete`
* `api.orders.checkout`
* `api.orders.recalculate`
* `api.orders.cancel`
* `api.orders.close`
* `api.orders.updateBillingAddress`
* `api.orders.updateShippingAddress`
* `api.orders.discounts.create(order_id, data)`
* `api.orders.discounts.update(order_id, discount_id, data)`
* `api.orders.discounts.delete(order_id, discount_id)`
* `api.orders.transactions.create(order_id, data)`
* `api.orders.transactions.update(customer_id, transaction_id, data)`
* `api.orders.transactions.delete(order_id, transaction_id)`
* `api.orders.items.create(order_id, data)`
* `api.orders.items.update(order_id, item_id, data)`
* `api.orders.items.delete(order_id, item_id)`
* `api.orderStatuses.list`
* `api.orderStatuses.retrieve`
* `api.orderStatuses.create`
* `api.orderStatuses.update`
* `api.orderStatuses.delete`
* `api.shippingMethods.list`
* `api.shippingMethods.retrieve`
* `api.shippingMethods.create`
* `api.shippingMethods.update`
* `api.shippingMethods.delete`
* `api.paymentMethods.list`
* `api.paymentMethods.retrieve`
* `api.paymentMethods.create`
* `api.paymentMethods.update`
* `api.paymentMethods.delete`
* `api.settings.retrieve`
* `api.settings.update`
* `api.settings.retrieveEmailSettings`
* `api.settings.updateEmailSettings`
* `api.settings.retrieveEmailTemplate`
* `api.settings.updateEmailTemplate`
* `api.checkoutFields.list`
* `api.checkoutFields.retrieve`
* `api.checkoutFields.update`
* `api.pages.list`
* `api.pages.retrieve`
* `api.pages.create`
* `api.pages.update`
* `api.pages.delete`
* `api.tokens.list`
* `api.tokens.retrieve`
* `api.tokens.create`
* `api.tokens.update`
* `api.tokens.delete`

## Web Store Methods

* `api.webstore.init(token)`
* `api.webstore.authorize(email)`
* `api.webstore.signup(email, admin_url)`
* `api.webstore.account.retrieve()`
* `api.webstore.account.update(data)`
* `api.webstore.account.updateDeveloper(data)`

## Contributing

If you can, please contribute by reporting issues, discussing ideas, or submitting pull requests with patches and new features. We do our best to respond to all issues and pull requests within a day or two, and make patch releases to npm regularly.
