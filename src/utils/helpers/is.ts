export const isClient = () => typeof window !== "undefined";

export const isEmpty = (value: unknown): boolean => {
	return (
		value === undefined ||
		value === null ||
		(typeof value === "object" && Object.keys(value)?.length === 0) ||
		(typeof value === "string" && value.trim()?.length === 0) ||
		(Array.isArray(value) && value?.length === 0)
	);
};

export const isObject = (obj: unknown) => {
	return (
		typeof obj === "object" &&
		!!obj &&
		!Array.isArray(obj) &&
		typeof obj !== "function"
	);
};

export function isArray(obj: unknown) {
	return obj instanceof Array || Array.isArray(obj);
}

export const isNumber = (val: unknown) =>
	typeof val === "number" && val === val;

export const isString = (value: unknown): boolean =>
	typeof value === "string" || value instanceof String;
