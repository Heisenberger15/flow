import { Nullable } from "@/types";

export function parseJwt<T>(token: string): Nullable<T> {
	if (!token) return null;

	const base64Url = token?.split(".")?.[1];
	const base64 = base64Url?.replace(/-/g, "+")?.replace(/_/g, "/");
	const jsonPayload =
		window &&
		decodeURIComponent(
			window
				?.atob(base64)
				?.split("")
				?.map(function (c) {
					return "%" + ("00" + c?.charCodeAt(0)?.toString(16))?.slice(-2);
				})
				?.join(""),
		);
	if (typeof jsonPayload === "string" && jsonPayload)
		return JSON.parse(jsonPayload);

	return null;
}
