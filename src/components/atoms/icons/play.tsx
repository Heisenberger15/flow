import { cn } from "@/utils";
import type { SVGProps } from "react";

export const PlayIcon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={cn("transition-all [&>*]:transition-all", className)}
			width="14"
			height="15"
			viewBox="0 0 14 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M12.361 6.25044C13.3457 6.79176 13.3457 8.20664 12.361 8.74796L2.86146 13.97C1.91178 14.4921 0.75 13.805 0.75 12.7213L0.75 2.27713C0.750001 1.1934 1.91178 0.506309 2.86146 1.02837L12.361 6.25044Z"
				fill="#1566A3"
			/>
		</svg>
	);
};
