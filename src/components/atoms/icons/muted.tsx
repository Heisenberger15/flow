import { cn } from "@/utils";
import type { SVGProps } from "react";

export const MutedIcon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={cn("transition-all [&>*]:transition-all", className)}
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M6.99949 0.500013C6.99949 0.298976 6.87908 0.11749 6.69386 0.0393389C6.50863 -0.0388119 6.29461 0.00157326 6.15061 0.14185L3.22389 2.99273H1.49951C0.671083 2.99273 -0.000488281 3.66431 -0.000488281 4.49273V7.48172C-0.000488281 8.31015 0.671084 8.98172 1.49951 8.98172H3.22265L6.14909 11.8567C6.29277 11.9978 6.50713 12.039 6.69288 11.9611C6.87862 11.8832 6.99949 11.7014 6.99949 11.5V0.500013ZM8.14645 4.14646C8.34171 3.9512 8.65829 3.9512 8.85355 4.14646L10 5.29291L11.1464 4.14646C11.3417 3.9512 11.6583 3.9512 11.8536 4.14646C12.0488 4.34172 12.0488 4.65831 11.8536 4.85357L10.7071 6.00001L11.8536 7.14646C12.0488 7.34172 12.0488 7.65831 11.8536 7.85357C11.6583 8.04883 11.3417 8.04883 11.1464 7.85357L10 6.70712L8.85355 7.85357C8.65829 8.04883 8.34171 8.04883 8.14645 7.85357C7.95118 7.65831 7.95118 7.34172 8.14645 7.14646L9.29289 6.00001L8.14645 4.85357C7.95118 4.65831 7.95118 4.34172 8.14645 4.14646Z"
				fill="#838383"
			/>
		</svg>
	);
};
