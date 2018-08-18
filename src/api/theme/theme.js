export default class Theme {
	constructor(client) {
		this.client = client;
	}

	export() {
		return this.client.get('/theme/export');
	}

	install(formData) {
		return this.client.postFormData('/theme/install', formData);
	}
}
