export default class Settings {
	constructor(client) {
		this.client = client;
		this.resourceUrl = '/settings';
	}

	retrieve() {
		return this.client.get(this.resourceUrl);
	}

	update(data) {
		return this.client.put(this.resourceUrl, data);
	}

	retrieveEmailSettings() {
		return this.client.get(`${this.resourceUrl}/email`);
	}

	updateEmailSettings(data) {
		return this.client.put(`${this.resourceUrl}/email`, data);
	}

	retrieveEmailTemplate(name) {
		return this.client.get(`${this.resourceUrl}/email/templates/${name}`);
	}

	updateEmailTemplate(name, data) {
		return this.client.put(`${this.resourceUrl}/email/templates/${name}`, data);
	}

	uploadLogo(formData) {
		return this.client.postFormData(`${this.resourceUrl}/logo`, formData);
	}

	deleteLogo() {
		return this.client.delete(`${this.resourceUrl}/logo`);
	}
}
