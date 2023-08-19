import { cn } from "@/utils";
import type { SVGProps } from "react";

export const UploadIcon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={cn("transition-all [&>*]:transition-all", className)}
			width="21"
			height="22"
			viewBox="0 0 21 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M9.77157 2.74358C12.113 0.399998 15.912 0.399998 18.2552 2.74314C20.5382 5.02621 20.5968 8.69142 18.4308 11.0454L18.2426 11.2427L9.44261 20.0409L9.40604 20.0712C7.9448 21.3879 5.6908 21.3432 4.28343 19.9358C2.96441 18.6168 2.84229 16.5541 3.91708 15.0974C3.94042 15.0521 3.96867 15.0083 4.00188 14.9672L4.05544 14.9075L4.14234 14.8198L4.28343 14.6719L4.28634 14.6748L11.7221 7.22047C11.988 6.95385 12.4046 6.92909 12.6985 7.14656L12.7827 7.21906C13.0494 7.48497 13.0741 7.9016 12.8567 8.19551L12.7842 8.27972L5.18953 15.8928C4.4719 16.7684 4.52178 18.0627 5.33917 18.8801C6.16824 19.7091 7.48789 19.7486 8.36368 18.9985L17.1964 10.1681C18.9519 8.41041 18.9519 5.56116 17.1945 3.8038C15.4921 2.10136 12.7649 2.04816 10.9984 3.6442L10.8305 3.8038L10.818 3.81812L1.28167 13.3544C0.988779 13.6473 0.513906 13.6473 0.221013 13.3544C-0.045254 13.0882 -0.0694599 12.6715 0.148395 12.3779L0.221013 12.2938L9.76989 2.74314L9.77157 2.74358Z"
				fill="#8A8A8A"
			/>
		</svg>
	);
};
