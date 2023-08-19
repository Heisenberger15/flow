export function animateNumberValue(
	// eslint-disable-next-line no-unused-vars
	callback: (value: number) => void,
	start: number,
	end: number,
	duration: number,
) {
	let startTimestamp: number | null = null;
	const step = (timestamp: number) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		callback(Math.floor(progress * (end - start) + start));
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}
