import { API_URL } from "@/config/environment";
import axios from "axios";

console.info(API_URL);

export const http = axios.create({
	baseURL: API_URL,
	timeout: 5000
});
