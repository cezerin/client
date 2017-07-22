import fetch from 'isomorphic-fetch'
import queryString from 'query-string'

class WebStoreClient {
  constructor() {
    this.isAuthorized = false;
    this.baseUrl = 'https://api.cezerin.com/v1';
  }

  init(token) {
    this.token = token;
    this.isAuthorized = true;
  }

  authorize(email, admin_url) {
    let config = {
      method: 'post',
      headers: {
        'Content-Type': 'text/plain',
        'Accept-Encoding': 'gzip, deflate'
      },
      body: JSON.stringify({ email: email, admin_url: admin_url })
    };
    return fetch(this.baseUrl + '/account/authorize', config).then(this.returnStatusAndJson);
  }

	getConfig(method, data) {
		let config = {
			method: method,
			headers: {
        'Content-Type': 'text/plain',
        'Accept-Encoding': 'gzip, deflate',
				'Authorization': 'Bearer ' + this.token
			}
		};

    if(data) {
      config.body = JSON.stringify(data);
    }
    return config;
	}

  postFormDataConfig(formData) {
    let config = {
      method: 'post',
      body: formData,
      headers: {
        'Authorization': 'Bearer ' + this.token
      }
    };

    return config;
  }

	get(endpoint, filter) {
    return fetch(this.baseUrl + endpoint + "?" + queryString.stringify(filter), this.getConfig('get')).then(this.returnStatusAndJson);
	}

  post(endpoint, data) {
		return fetch(this.baseUrl + endpoint, this.getConfig('post', data)).then(this.returnStatusAndJson);
	}

  put(endpoint, data) {
		return fetch(this.baseUrl + endpoint, this.getConfig('put', data)).then(this.returnStatusAndJson);
	}

  delete(endpoint) {
		return fetch(this.baseUrl + endpoint, this.getConfig('delete')).then(this.returnStatusAndJson);
	}

  postFormData(endpoint, formData) {
    return fetch(this.baseUrl + endpoint, this.postFormDataConfig(formData)).then(this.returnStatusAndJson);
  }

  returnStatusAndJson(response) {
      // response.status (number) - HTTP response code in the 100–599 range
      // response.statusText (String) - Status text as reported by the server, e.g. "Unauthorized"
      // response.ok (boolean) - True if status is HTTP 2xx
      // response.headers (Headers)
      // response.url (String)

      return response.json()
      .then(json => ({status: response.status, json: json}))
      .catch(() => ({status: response.status, json: null}));
  }
}

module.exports = new WebStoreClient()
