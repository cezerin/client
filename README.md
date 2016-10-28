# Cezerin API client library

Allows asynchronous requests to Cezerin REST API and get results with Promise.

Install with:

    npm install cezerin-client


## Usage

```javascript
let api = require('cezerin-client');
api.init('https://website.com/api/', 'en', 'eyJhbGciOiJIUzI1NiIsInR...');

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
api.init('https://website.com/api/', 'en', 'eyJhbGciOiJIUzI1NiIsInR...');

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

* `init(baseUrl, language, token)`
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

## Contribute
