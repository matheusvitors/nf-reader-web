import { PATH } from "@/config/constants"
import { http } from "@/config/http"
import { httpErrorHandler } from "@/config/http-error-handler";

export const removeNotaFiscal = async (id: string) => {
	try {
		await http.delete(`${PATH}/${id}`);
	} catch (error) {
		throw httpErrorHandler(error);
	}
}
