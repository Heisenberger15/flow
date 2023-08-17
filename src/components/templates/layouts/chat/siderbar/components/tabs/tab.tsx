"use client";

import { useRipple } from "@/hooks";
import Link from "next/link";
import { PropsWithChildren, useRef } from "react";
import { Tooltip } from "@mantine/core";

const Tab = ({ children }: PropsWithChildren) => {
	const ref = useRef<HTMLAnchorElement>(null);
	const ripple = useRipple(ref);

	return (
		<li className="relative w-full h-[70px]">
			<Tooltip
				label="Tooltip"
				color="#111"
				position="right"
				withArrow
				arrowPosition="center"
				transitionProps={{ transition: "slide-left", duration: 100 }}
			>
				<Link
					ref={ref}
					href={""}
					className="w-full h-full flex justify-center items-center relative overflow-hidden rounded-md"
				>
					{ripple}
					{children}
				</Link>
			</Tooltip>
		</li>
	);
};

export default Tab;
