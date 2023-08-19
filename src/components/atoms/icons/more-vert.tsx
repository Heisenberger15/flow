import { cn } from "@/utils";
import type { SVGProps } from "react";

export const MoreVertIcon = ({
	className,
	...rest
}: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={cn("transition-all [&>*]:transition-all", className)}
			width="4"
			height="14"
			viewBox="0 0 4 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M2 3C1.30964 3 0.75 2.44036 0.75 1.75C0.75 1.05964 1.30964 0.5 2 0.5C2.69036 0.5 3.25 1.05964 3.25 1.75C3.25 2.44036 2.69036 3 2 3ZM2 8.25C1.30964 8.25 0.75 7.69036 0.75 7C0.75 6.30964 1.30964 5.75 2 5.75C2.69036 5.75 3.25 6.30964 3.25 7C3.25 7.69036 2.69036 8.25 2 8.25ZM0.749999 12.25C0.749999 12.9404 1.30964 13.5 2 13.5C2.69036 13.5 3.25 12.9404 3.25 12.25C3.25 11.5596 2.69036 11 2 11C1.30964 11 0.75 11.5596 0.749999 12.25Z"
				fill="white"
			/>
		</svg>
	);
};
