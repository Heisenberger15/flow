"use client";

import type { PropsWithChildren } from "react";
import Sidebar from "./siderbar";
import { useTheme } from "@/hooks";

const Main = (props: PropsWithChildren) => {
	const { isClient } = useTheme();

	if (!isClient) return null;
	return (
		<div className="grid grid-cols-[auto_1fr] grid-row-[100%] w-full h-screen">
			<Sidebar />
			<main className="w-full h-full bg-[var(--color-background)]">
				{props.children}
			</main>
		</div>
	);
};

export default Main;
