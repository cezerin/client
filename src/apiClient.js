import fetch from 'isomorphic-fetch'

class ApiClient {
  constructor() {
    this.isAuthorized = false;
  }

  init(baseUrl, token) {
    this.baseUrl = baseUrl;
    this.token = token;
    this.isAuthorized = true;
  }

  authorize(baseUrl, endpoint, user, pass) {
    let config = {
  		method: 'post',
  		headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
  			'Authorization': 'Basic ' + this.btoa(`${user}:${pass}`)
  		}
    };
    return fetch(baseUrl + endpoint, config).then(this.returnStatusAndJson);
  }

  btoa(str) {
    return Buffer.from(str).toString('base64');
  }

	getConfig(method, data) {
		let config = {
			method: method,
			headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
				'Authorization': 'Bearer ' + this.token
			}
		};

    if(data) {
      config.body = JSON.stringify(data);
    }
    return config;
	}

  getParamsFromObject(obj) {
    let params = "";
    if(obj) {
      params = "?" + Object.keys(obj).map(key => (key + '=' + encodeURIComponent(obj[key]))).join('&');
    }
    return params;
  }

	get(endpoint, filter) {
    return fetch(this.baseUrl + endpoint + this.getParamsFromObject(filter), this.getConfig('get')).then(this.returnStatusAndJson);
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

  returnStatusAndJson(response) {
      var contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json().then(function(json) {
              return {status: response.status, json: json};
          });
      } else {
          return {status: response.status, json: null};
      }
  }
}

module.exports = new ApiClient()
