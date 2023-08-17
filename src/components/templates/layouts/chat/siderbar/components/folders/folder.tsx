"use client";

import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";
import { useRipple } from "@/hooks";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef } from "react";

const Avatar = dynamic(
	() => import("@/components/atoms").then((c) => c.Avatar),
	{
		ssr: false,
		loading: () => <AvatarFallbackComponent />,
	},
);

const Folder = () => {
	const ref = useRef<HTMLAnchorElement>(null);
	const ripple = useRipple(ref);
	return (
		<li className="w-full h-[68px] text-white group">
			<Link
				ref={ref}
				href={""}
				className="flex items-center relative gap-4 max-w-[95%] mx-auto px-3 rounded  py-1 overflow-hidden w-full h-full group-hover:bg-[rgba(255,255,255,0.06)] transition-all"
			>
				{ripple}
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
						<span className="text-[rgb(170,170,170)] "> aha bashe</span>
					</p>
				</div>
			</Link>
		</li>
	);
};

export default Folder;
