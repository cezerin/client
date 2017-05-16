# Cezerin API client library

Allows asynchronous requests to Cezerin REST API and get results with Promise.

Install with:

    npm install cezerin-client


## Usage

```javascript
let api = require('cezerin-client');
api.init('https://website.com/api/v1', '<token>');

// get all categories
api.productCategories.list().then(({status, json}) => {
    console.log(json[0].name)
});

// create a category
api.productCategories.create({name: 'Woman', active: false})
.then(({status, json}) => {
    console.log(`New id: ${json.id}`)
});
```

##  Error Handling

```javascript
let api = require('cezerin-client');
api.init('https://website.com/api/v1', '<token>');

api.productCategories.create({ name: 'Woman' })
.then(({status, json}) => {
  if(status === 200) {
    return json;
  } else {
    throw 'Error';
  }
})
.catch(error => {
    console.log(error)
});
```

## Methods

* `init(baseUrl, token)`
* `authorize(baseUrl, user, pass)`
* `sitemap.list()`
* `sitemap.retrieve(path)`
* `productCategories.list()`
* `productCategories.retrieve(id)`
* `productCategories.create(data)`
* `productCategories.update(id, data)`
* `productCategories.delete(id)`
* `productCategories.uploadImage(categoryId, formData)`
* `productCategories.deleteImage(id)`
* `products.list({
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
   })`
* `products.retrieve(id)`
* `products.create(data)`
* `products.update(id, data)`
* `products.delete(id)`
* `products.skuExists(productId, sku)`
* `products.slugExists(productId, slug)`
* `products.options.list(productId)`
* `products.options.retrieve(productId, optionId)`
* `products.options.create(productId, data)`
* `products.options.update(productId, optionId, data)`
* `products.options.delete(productId, optionId)`
* `products.options.values.list(productId, optionId)`
* `products.options.values.retrieve(productId, optionId, valueId)`
* `products.options.values.create(productId, optionId, data)`
* `products.options.values.update(productId, optionId, valueId, data)`
* `products.options.values.delete(productId, optionId, valueId)`
* `products.variants.list(productId)`
* `products.variants.create(productId, data)`
* `products.variants.update(productId, variantId, data)`
* `products.variants.delete(productId, variantId)`
* `products.variants.setOption(productId, variantId, data)`
* `products.images.list(productId)`
* `products.images.upload(productId, formData)`
* `products.images.delete(productId, imageId)`
* `themes.exportCurrent()`
* `themes.importAndInstall(formData)`
* `customers.list`
* `customers.retrieve`
* `customers.create`
* `customers.update`
* `customers.delete`
* `customers.recalculate`
* `customers.createAddress`
* `customers.updateAddress`
* `customers.deleteImage`
* `customers.setDefaultBillingAddress`
* `customers.setDefaultShippingAddress`
* `customerGroups.list`
* `customerGroups.retrieve`
* `customerGroups.create`
* `customerGroups.update`
* `customerGroups.delete`
* `orders.list`
* `orders.retrieve`
* `orders.create`
* `orders.update`
* `orders.delete`
* `orders.checkout`
* `orders.recalculate`
* `orders.cancel`
* `orders.close`
* `orders.updateBillingAddress`
* `orders.updateShippingAddress`
* `orders.discounts.create(order_id, data)`
* `orders.discounts.update(order_id, discount_id, data)`
* `orders.discounts.delete(order_id, discount_id)`
* `orders.transactions.create(order_id, data)`
* `orders.transactions.update(customer_id, transaction_id, data)`
* `orders.transactions.delete(order_id, transaction_id)`
* `orders.items.create(order_id, data)`
* `orders.items.update(order_id, item_id, data)`
* `orders.items.delete(order_id, item_id)`
* `orderStatuses.list`
* `orderStatuses.retrieve`
* `orderStatuses.create`
* `orderStatuses.update`
* `orderStatuses.delete`
* `shippingMethods.list`
* `shippingMethods.retrieve`
* `shippingMethods.create`
* `shippingMethods.update`
* `shippingMethods.delete`
* `paymentMethods.list`
* `paymentMethods.retrieve`
* `paymentMethods.create`
* `paymentMethods.update`
* `paymentMethods.delete`
* `settings.retrieve`
* `settings.update`
* `settings.retrieveEmailSettings`
* `settings.updateEmailSettings`
* `settings.retrieveEmailTemplate`
* `settings.updateEmailTemplate`
* `checkoutFields.list`
* `checkoutFields.retrieve`
* `checkoutFields.update`
* `pages.list`
* `pages.retrieve`
* `pages.create`
* `pages.update`
* `pages.delete`
* `tokens.list`
* `tokens.retrieve`
* `tokens.create`
* `tokens.update`
* `tokens.delete`


## Contributing

If you can, please contribute by reporting issues, discussing ideas, or submitting pull requests with patches and new features. We do our best to respond to all issues and pull requests within a day or two, and make patch releases to npm regularly.
