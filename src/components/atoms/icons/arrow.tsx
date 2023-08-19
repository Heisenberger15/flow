import { cn } from "@/utils";
import type { SVGProps } from "react";

export const ArrowIcon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={cn("transition-all [&>*]:transition-all", className)}
			width="12"
			height="13"
			viewBox="0 0 12 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M6 1L6 12M6 12L1 7M6 12L11 7"
				stroke="white"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
