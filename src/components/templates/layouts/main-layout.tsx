import { PropsWithChildren } from "react";
import { ReactQueryProvider } from "../providers";

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<ReactQueryProvider>
			<main>{children}</main>
		</ReactQueryProvider>
	);
};

export default MainLayout;
