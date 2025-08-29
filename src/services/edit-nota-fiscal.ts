import { http } from "@/config/http";
import { httpErrorHandler } from "@/config/http-error-handler";
import { NotaFiscal } from "@/interfaces";

export const editNotaFiscal = async (notaFiscal: NotaFiscal): Promise<void> => {
	try {
		await http.put(`/nf/${notaFiscal.id}`, notaFiscal);
	} catch (error) {
		console.error(error);
		throw httpErrorHandler(error);
	}
}
