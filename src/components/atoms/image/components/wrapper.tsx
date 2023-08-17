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
				"block bg-[#D9D9D9] relative",
				className,
			)}
		>
			{!isLoading && children}
		</span>
	);
}
