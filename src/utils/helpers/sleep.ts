type MiliSeconds = number;

export const sleep = (miliseconds: MiliSeconds = 500) =>
	new Promise((resolve) => setTimeout(resolve, miliseconds));
