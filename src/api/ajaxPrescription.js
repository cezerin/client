export default class AjaxPrescription {
	constructor(client) {
		this.client = client;
	}

	retrieve(orderId) {
		return this.client.get(`/prescription/${orderId}`);
	}

	create() {
		return this.client.post(`/prescription`);
	}

	update(orderId, data) {
		return this.client.put(`/prescription/${orderId}`, data);
	}

	checkout(orderId, data) {
		return this.client.put(`/prescription/${orderId}/checkout`, data);
	}

	confirmPrescription(orderId) {
		return this.client.put(`/prescription/${orderId}/confirm`);
	}

	uploadPrescription(orderId, data) {
		return this.client.postFormData(`/prescription/${orderId}/items`, data);
	}

	uploadLicense(orderId, data) {
		return this.client.postFormData(`/prescription/${orderId}/licenses`, data);
	}

	deleteLicense(orderId, fileId) {
		return this.client.delete(`/prescription/${orderId}/licenses/${fileId}`);
	}

	deleteFile(orderId, fileId) {
		return this.client.delete(`/prescription/${orderId}/items/${fileId}`);
	}
}
