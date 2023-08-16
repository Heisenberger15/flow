import { ChatLayout } from "@/components/templates";
import type { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
	return <ChatLayout>{props.children}</ChatLayout>;
};

export default Layout;
