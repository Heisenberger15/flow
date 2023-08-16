import { PropsWithChildren } from "react";
import { ReactQueryProvider } from "../providers";

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<ReactQueryProvider>
			<>{children}</>
		</ReactQueryProvider>
	);
};

export default MainLayout;
