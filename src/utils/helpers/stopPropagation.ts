export function stopPropagation(cb: (..._args: unknown[]) => void) {
	return <T extends { stopPropagation: () => void }>(e: T) => {
		e.stopPropagation();
		return cb(e);
	};
}
