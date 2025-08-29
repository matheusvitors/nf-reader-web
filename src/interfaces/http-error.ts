import { HttpStatusCode } from "@/interfaces/http-codes";

export interface HttpError {
	status: HttpStatusCode;
	message: string;
}
