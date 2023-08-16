export function cn(...props: unknown[]) {
	return props.filter(Boolean).join(" ");
}
