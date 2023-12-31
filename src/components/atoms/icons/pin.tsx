import { cn } from "@/utils";
import type { SVGProps } from "react";

export const PinIcon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={cn("transition-all [&>*]:transition-all", className)}
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M10.3251 0.617854C9.35986 -0.347429 7.73257 -0.0833536 7.12207 1.13764L5.39285 4.59609C5.22855 4.92468 4.94939 5.18155 4.60829 5.31799L1.01834 6.75397C0.351773 7.0206 0.174981 7.88191 0.682624 8.38955L3.29289 10.9998L0 14.2927V14.9998H0.707112L4 11.7069L6.61027 14.3172C7.11791 14.8248 7.97923 14.648 8.24585 13.9815L9.68183 10.3915C9.81827 10.0504 10.0751 9.77127 10.4037 9.60697L13.8622 7.87775C15.0832 7.26725 15.3472 5.63996 14.382 4.67468L10.3251 0.617854Z"
				fill="#838383"
			/>
		</svg>
	);
};
