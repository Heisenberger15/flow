import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { useRipple } from "@/hooks";

const Avatar = dynamic(
	() => import("@/components/atoms").then((c) => c.Avatar),
	{
		ssr: false,
		loading: () => <AvatarFallbackComponent className="w-[32px] h-[32px]" />,
	},
);
export const UserInfo = () => {
	const ref = useRef<HTMLButtonElement>(null);
	const ripple = useRipple(ref);

	return (
		<div className="w-full h-[53px] bg-[#40444B] flex-shrink-0">
			<div className="flex items-center justify-between px-3 max-w-[95%] mx-auto gap-3 h-[inherit]">
				<button
					ref={ref}
					className="flex flex-1 gap-2 relative overflow-hidden items-center p-[2px] hover:rounded-[4px] transition-all hover:bg-[#4f545c99] min-w-[80px] max-w-[200px]"
				>
					<Avatar src="" alt="" className="w-[32px] h-[32px]" />
					<div className="flex flex-col text-left py-1 pr-4  text-white">
						<span className="text-[14px] capitalize truncate max-w-[10ch]">
							Sina p
						</span>
						<span className="text-[11px]">#5643</span>
					</div>
					{ripple}
				</button>
				<div className="flex items-center h-[inherit]">Icon</div>
			</div>
		</div>
	);
};
