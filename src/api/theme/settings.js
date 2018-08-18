export default class ThemeSettings {
	constructor(client) {
		this.client = client;
	}

	retrieve() {
		return this.client.get('/theme/settings');
	}

	update(data) {
		return this.client.put('/theme/settings', data);
	}

	retrieveSchema() {
		return this.client.get('/theme/settings_schema');
	}
}
