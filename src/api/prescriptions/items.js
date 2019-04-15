export default class PrescriptionItems {
	constructor(client) {
		this.client = client;
	}

	uploadPrescription(prescriptionId, data) {
		return this.client.postFormData(
			`/prescriptions/${prescriptionId}/items`,
			data
		);
	}

	uploadLicense(prescriptionId, data) {
		return this.client.postFormData(
			`/prescriptions/${prescriptionId}/licenses`,
			data
		);
	}

	deleteLicense(prescriptionId, fileId) {
		return this.client.delete(
			`/prescriptions/${prescriptionId}/licenses/${fileId}`
		);
	}

	deletePrescription(prescriptionId, fileId) {
		return this.client.delete(
			`/prescriptions/${prescriptionId}/items/${fileId}`
		);
	}
}
