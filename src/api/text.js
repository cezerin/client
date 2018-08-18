export default class Text {
	constructor(client) {
		this.client = client;
	}

	list() {
		return this.client.get('/text');
	}
}
