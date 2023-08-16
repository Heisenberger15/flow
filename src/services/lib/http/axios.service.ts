import { API_ENDPOINT, StartWithSlash } from "@/types";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export abstract class AxiosService {
	constructor(
		// eslint-disable-next-line no-unused-vars
		private prefix?: StartWithSlash,
		// eslint-disable-next-line no-unused-vars
		private baseURL: string = process.env.NEXT_PUBLIC_APP_API_URL!,
	) {}

	private get instance(): AxiosInstance {
		return axios.create({
			baseURL: this.baseURL + (this.prefix || ""),
		});
	}

	public get = <T, R = AxiosResponse<T>>(
		endpoint: API_ENDPOINT,
		config?: AxiosRequestConfig,
	): Promise<R> => {
		return this.instance.get(endpoint, config);
	};

	public post = <T, B, R = AxiosResponse<T>>(
		endpoint: API_ENDPOINT,
		{
			data,
			config,
		}: {
			data?: B;
			config?: AxiosRequestConfig;
		},
	): Promise<R> => {
		return this.instance.post(endpoint, data, config);
	};

	public put = <T, B, R = AxiosResponse<T>>(
		endpoint: API_ENDPOINT,
		{
			data,
			config,
		}: {
			data?: B;
			config?: AxiosRequestConfig;
		},
	): Promise<R> => {
		return this.instance.put(endpoint, data, config);
	};

	public delete = <T, R = AxiosResponse<T>>(
		endpoint: API_ENDPOINT,
		config?: AxiosRequestConfig,
	): Promise<R> => {
		return this.instance.delete(endpoint, config);
	};
}
