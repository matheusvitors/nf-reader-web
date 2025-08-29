import { HttpError } from "@/interfaces/http-error";
import { AxiosError } from "axios";

export const httpErrorHandler = (error: any): HttpError => {
	let message = '';
	if(error instanceof AxiosError) {
		message = error.response?.data.message;
	}

	const errors: any = {
		0: { status: 0, message: error.message},
		401: { status: 401, message: 'Usuário não autorizado.'},
		404: { status: 404, message: 'Não encontrado'},
		405: { status: 405, message: 'Método HTTP não suportado pelo servidor.'},
		422: { status: 422, message },
		500: { status: 500, message: 'Não foi possível se conectar com o servidor. Tente novamente em alguns minutos.' + error.message}
	}

	let errorType = errors[0];

	if(error instanceof AxiosError) {
		if(error.response){
			errorType = errors[error.response.status];
			error.response.status !== 401 && console.error('[Failed request] => ', JSON.stringify(error.request))
		} else {
			errorType = errors[500]
		}

		if(error.message === 'timeout of 5000ms exceeded' || error.message === 'timeout of 10000ms exceeded') {
			errorType.message = 'Servidor indisponível. Tente novamente em alguns minutos.'
		}
	}

	// console.error(`[HTTP-ERROR-HANDLER] [${from}] => `, error, errorType, error.message);
	return errorType;
}
