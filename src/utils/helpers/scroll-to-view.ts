export const ScrollToView = (
	elementId: string,
	options?: ScrollIntoViewOptions,
) => {
	const element = document?.getElementById?.(elementId);
	element?.scrollIntoView?.(options);
};
