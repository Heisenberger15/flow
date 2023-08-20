"use client";

import type { PropsWithChildren } from "react";
import Sidebar from "./siderbar";
import { useTheme } from "@/hooks";
import { Tabs } from "./siderbar/components";
import { cn } from "@/utils";
import { useHandleMenu } from "@/stores";

const Main = (props: PropsWithChildren) => {
	const { isClient } = useTheme();

	const { isMenuOpen } = useHandleMenu();

	if (!isClient) return null;
	return (
		<div className="grid grid-cols-1 lt:grid-cols-[80px_1fr] grid-row-[100%] w-full h-screen ">
			<Tabs variants="desktop" />
			<div
				className={"relative w-full grid grid-cols-[auto_1fr] overflow-hidden"}
			>
				<Sidebar />
				<main
					className={cn(
						"w-full fixed top-0 lt:static h-full bg-[var(--color-background)] transition-all",
						isMenuOpen ? "left-full" : "left-0",
					)}
				>
					{props.children}
				</main>
			</div>
		</div>
	);
};

export default Main;
