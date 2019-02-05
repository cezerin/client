export default class PrescriptionItems {
	constructor(client) {
		this.client = client;
	}

	create(prescriptionId, data) {
		return this.client.post(`/prescriptions/${prescriptionId}/items`, data);
	}

	update(prescriptionId, itemId, data) {
		return this.client.put(
			`/prescriptions/${prescriptionId}/items/${itemId}`,
			data
		);
	}

	delete(prescriptionId, itemId) {
		return this.client.delete(
			`/prescriptions/${prescriptionId}/items/${itemId}`
		);
	}
}
