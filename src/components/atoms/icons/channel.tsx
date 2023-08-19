import { cn } from "@/utils";
import type { SVGProps } from "react";

export const ChannelIcon = ({
	className,
	...rest
}: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={cn("transition-all [&>*]:transition-all", className)}
			width="14"
			height="12"
			viewBox="0 0 14 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M11.8908 0.681798C12.6526 0.478648 13.4 1.05284 13.4 1.84128V10.0901C13.4 10.9091 12.5975 11.4875 11.8205 11.2285L8.01667 9.96052C7.63457 10.921 6.69687 11.6 5.59998 11.6C4.16404 11.6 2.99998 10.4359 2.99998 9V8.28829L1.4205 7.7618C0.930492 7.59847 0.599976 7.1399 0.599976 6.62338V4.61461C0.599976 4.07095 0.965476 3.59521 1.49078 3.45513L11.8908 0.681798ZM3.79998 8.55496V9C3.79998 9.99411 4.60586 10.8 5.59998 10.8C6.3429 10.8 6.98123 10.3496 7.25596 9.70696L3.79998 8.55496Z"
				fill="white"
			/>
		</svg>
	);
};
