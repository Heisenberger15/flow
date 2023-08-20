import { Ref, forwardRef, useRef } from "react";
import { useRipple } from "@/hooks";

import { ComponentProps } from "react";
import Link from "next/link";
import { useMergedRef } from "@mantine/hooks";

type RippleButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;

export interface Props extends RippleButtonOrLinkProps {}

function RippleButtonOrLink(
	{ className, children, href, ref, ...props }: Props,
	componentRef: Ref<unknown>,
) {
	const isLink = typeof href !== "undefined";
	const elementRef = useRef(null);
	const ripple = useRipple(elementRef);

	const mergedRef = useMergedRef(elementRef, componentRef);

	if (isLink) {
		return (
			<Link
				className={`!relative !overflow-hidden ${className}`}
				ref={mergedRef}
				href={href}
				{...props}
			>
				{ripple}
				{children}
			</Link>
		);
	}

	return (
		<button
			className={`!relative !overflow-hidden ${className}`}
			ref={mergedRef}
			{...props}
		>
			{children}
			{ripple}
		</button>
	);
}

export default forwardRef(RippleButtonOrLink);
