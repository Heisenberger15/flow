"use client";

import type { PropsWithChildren } from "react";
import { montserrat } from "@/app/layout";
import { useTheme } from "@/hooks";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("./main"), {
	ssr: false,
});

export const ChatLayout = (props: PropsWithChildren) => {
	const { theme } = useTheme();

	return (
		<body
			className={`overflow-hidden ${montserrat.className}`}
			data-theme={theme}
		>
			<Main>{props.children}</Main>
		</body>
	);
};
