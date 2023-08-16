"use client";

import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";
import dynamic from "next/dynamic";
import Link from "next/link";

const Avatar = dynamic(
	() => import("@/components/atoms").then((c) => c.Avatar),
	{
		ssr: false,
		loading: () => <AvatarFallbackComponent />,
	},
);

const Folder = () => {
	return (
		<li className="w-full h-[68px] text-white group">
			<Link
				href={""}
				className="flex items-center gap-4 max-w-[95%] mx-auto px-3 rounded  py-1 overflow-hidden w-full h-full group-hover:bg-[rgba(255,255,255,0.06)] transition-all"
			>
				<Avatar
					src={""}
					alt={"avatar profile image"}
					className="w-[50px] h-[50px]"
					width={50}
					height={50}
				/>

				<div className="h-full flex flex-col justify-evenly flex-1">
					<div className="w-full flex items-center justify-between">
						<h3>flow</h3>
						<time>11:28 PM</time>
					</div>
					<p>
						<span>sina parsa: </span>
						<span> aha bashe</span>
					</p>
				</div>
			</Link>
		</li>
	);
};

export default Folder;
