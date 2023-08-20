"use client";

import { PropsWithChildren } from "react";
import { Tooltip } from "@mantine/core";
import { RippleButtonOrLink } from "@/components/atoms";

const Tab = ({ children }: PropsWithChildren) => {
	return (
		<li className="relative w-full h-[70px] group">
			<Tooltip
				label="Tooltip"
				color="var(--color-background-tooltip)"
				position="right"
				withArrow
				arrowPosition="center"
				transitionProps={{ transition: "slide-left", duration: 100 }}
			>
				<RippleButtonOrLink
					href={""}
					className="w-full h-full flex justify-center items-center relative overflow-hidden rounded-md group-hover:bg-[var(--color-background-chat-folder-hover)] transition-all"
				>
					{children}
				</RippleButtonOrLink>
			</Tooltip>
		</li>
	);
};

export default Tab;
