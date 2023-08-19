import { cn } from "@/utils";
import { CustomWrapperProps } from "@/types";

export function CustomImageWrapper({
	children,
	isLoading,
	className,
}: CustomWrapperProps) {
	return (
		<span
			className={cn(
				isLoading && "animate-pulse",
				"block bg-[var(--color-background-image)] relative",
				className,
			)}
		>
			{!isLoading && children}
		</span>
	);
}
