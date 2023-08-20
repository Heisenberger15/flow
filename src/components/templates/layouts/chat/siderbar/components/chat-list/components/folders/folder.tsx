"use client";

import { RippleButtonOrLink } from "@/components/atoms";
import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";
import { useHandleMenu } from "@/stores";
import dynamic from "next/dynamic";

const Avatar = dynamic(
	() => import("@/components/atoms").then((c) => c.Avatar),
	{
		ssr: false,
		loading: () => <AvatarFallbackComponent />,
	},
);

const Folder = () => {
	const { setMenuOpen } = useHandleMenu();
	const showChatSection = () => setMenuOpen(false);

	return (
		<li className="w-full h-[68px] group" onClick={showChatSection}>
			<RippleButtonOrLink className="flex items-center relative gap-4 max-w-[95%] mx-auto px-3 rounded-md py-1 overflow-hidden w-full h-full group-hover:bg-[var(--color-background-chat-folder-hover)] transition-all">
				<Avatar
					src={""}
					alt={"avatar profile image"}
					className="w-[50px] h-[50px]"
					size={50}
				/>

				<div className="h-full flex flex-col justify-evenly flex-1">
					<div className="w-full flex items-center justify-between">
						<h3 className="font-medium text-[1rem]">flow</h3>
						<time className="text-[0.75rem]">11:28 PM</time>
					</div>
					<p className="text-[1rem]">
						<span>sina parsa: </span>
						<span className="text-[var(--color-secondary)]"> aha bashe</span>
					</p>
				</div>
			</RippleButtonOrLink>
		</li>
	);
};

export default Folder;
