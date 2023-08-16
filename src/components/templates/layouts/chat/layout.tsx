import type { PropsWithChildren } from "react";
import Sidebar from "./siderbar";

export const ChatLayout = (props: PropsWithChildren) => {
	return (
		<div className="grid grid-cols-[auto_1fr] grid-row-[100%] w-full h-screen bg-[#202020]">
			<Sidebar />
			<main className="w-full h-full bg-[#101010e3] text-white">
				{props.children}
			</main>
		</div>
	);
};
