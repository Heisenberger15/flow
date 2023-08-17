export const convertStringLabel = (label: string): string =>
	label?.length > 1 ? label.slice(0, 1) + label.slice(-1) : label;
