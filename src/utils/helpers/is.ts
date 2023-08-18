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

export const isObject = (obj: unknown): obj is object => {
	return (
		typeof obj === "object" &&
		!!obj &&
		!Array.isArray(obj) &&
		typeof obj !== "function"
	);
};

export function isArray<T>(array: unknown): array is Array<T> {
	return array instanceof Array || Array.isArray(array);
}

export const isNumber = (val: unknown): val is number =>
	typeof val === "number" && val === val;

export const isString = (value: unknown): value is string =>
	typeof value === "string" || value instanceof String;
