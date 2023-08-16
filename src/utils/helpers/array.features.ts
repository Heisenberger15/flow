export class ArrayFeatures {
	createFakeArray = (num: number): number[] => [...Array(num).keys()];

	removeDuplicates = <T, K extends keyof T>(data: T[], redundantKey: K) => {
		const seen = new Set();
		const clean = data?.filter((item) => {
			const redundantValue = item?.[redundantKey];
			const isDup = seen.has(redundantValue);
			seen.add(redundantValue);
			return !isDup;
		});
		seen.clear();
		return clean;
	};

	groupBy<T>(
		array: T[],
		predicate: (_value: T, _index: number, _array: T[]) => string,
	) {
		return array.reduce(
			(acc, value, index, array) => {
				(acc[predicate(value, index, array)] ||= []).push(value);
				return acc;
			},
			{} as { [key: string]: T[] },
		);
	}
}
