# Cezerin API client library

Allows asynchronous requests to Cezerin REST API and get results with Promise.

Install with:

    npm install cezerin-client


## Usage

```javascript
let api = require('cezerin-client');
api.init('https://website.com/api/', '<token>');

// get all categories
api.products.categories.list().then(({status, json}) => {
    console.log(json[0].name)
});

// create a category
api.products.categories.create({name: 'Woman', active: false})
.then(({status, json}) => {
    console.log(`New id: ${json.id}`)
});
```

##  Error Handling

```javascript
let api = require('cezerin-client');
api.init('https://website.com/api/', '<token>');

api.products.categories.create({ name: 'Woman', active: false })
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
* `products.categories.list()`
* `products.categories.retrieve(id)`
* `products.categories.create(data)`
* `products.categories.update(id, data)`
* `products.categories.delete(id)`
* `products.categories.uploadImage(data)`
* `products.categories.deleteImage(id)`
* `products.list({
    offset: 0,
    limit: 10,
    fields: 'id, name, price',
    brand_id: '<id>',
    category_id: '<id>',
    active: true,
    discontinued: false,
    search: '',
    on_sale: true,
    stock_status: 'available',
    price_from: 0,
    price_to: 100,
    sku: '',
    ids: '<id>,<id>,<id>'  
   })`
* `products.retrieve(id)`
* `products.create(data)`
* `products.update(id, data)`
* `products.delete(id)`
* `products.uploadImage(productId, data)`
* `products.deleteImage(productId, imageId)`



## Contribute
*
*
*
