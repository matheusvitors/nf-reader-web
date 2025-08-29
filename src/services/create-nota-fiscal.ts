import { http } from "@/config/http";
import { httpErrorHandler } from "@/config/http-error-handler";
import { NotaFiscal } from "@/interfaces";

export const createNotaFiscal = async (notaFiscal: NotaFiscal): Promise<void> => {
	try {
		await http.post('/nf', notaFiscal);
	} catch (error) {
		console.error(error);
		throw httpErrorHandler(error);
	}
}
