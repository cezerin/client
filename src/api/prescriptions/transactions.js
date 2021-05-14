export default class PrescriptionTransactions {
	constructor(client) {
		this.client = client;
	}

	create(prescriptionId, data) {
		return this.client.post(
			`/prescriptions/${prescriptionId}/transactions`,
			data
		);
	}

	update(prescriptionId, transactionId, data) {
		return this.client.put(
			`/prescriptions/${prescriptionId}/transactions/${transactionId}`,
			data
		);
	}

	delete(prescriptionId, transactionId) {
		return this.client.delete(
			`/prescriptions/${prescriptionId}/transactions/${transactionId}`
		);
	}
}
