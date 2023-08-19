"use client";

import type { PropsWithChildren } from "react";
import { useTheme } from "@/hooks";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("./main"), {
	ssr: false,
});

export const ChatLayout = (props: PropsWithChildren) => {
	const { theme } = useTheme();

	return (
		<body className={`overflow-hidden`} data-theme={theme}>
			<Main>{props.children}</Main>
		</body>
	);
};
