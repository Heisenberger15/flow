"use client";

import { PropsWithChildren } from "react";
import { ReactQueryProvider, RootStyleRegistry } from "../providers";

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<ReactQueryProvider>
			<RootStyleRegistry>{children}</RootStyleRegistry>
		</ReactQueryProvider>
	);
};

export default MainLayout;
