import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";
import dynamic from "next/dynamic";
import { useTheme } from "@/hooks";
import { SettingIcon } from "@/components/atoms/icons";
import { RippleButtonOrLink } from "@/components/atoms";

const Avatar = dynamic(
	() => import("@/components/atoms").then((c) => c.Avatar),
	{
		ssr: false,
		loading: () => <AvatarFallbackComponent className="w-[32px] h-[32px]" />,
	},
);
export const UserInfo = () => {
	const { toggle } = useTheme();

	return (
		<div className="w-full h-[53px] bg-[var(--color-background-user-info)] flex-shrink-0">
			<div className="flex items-center justify-between px-3 max-w-[95%] mx-auto gap-3 h-[inherit]">
				<RippleButtonOrLink className="flex flex-1 gap-2 items-center p-[2px] hover:rounded-[4px] transition-all hover:bg-[var(--color-background-user-info-hover)] min-w-[80px] max-w-[200px]">
					<Avatar src="" alt="" className="w-[32px] h-[32px]" />
					<div className="flex flex-col text-left py-1 pr-4  text-[var(--color)]">
						<span className="text-[14px] capitalize truncate max-w-[10ch]">
							Sina p
						</span>
						<span className="text-[11px]">#5643</span>
					</div>
				</RippleButtonOrLink>
				<RippleButtonOrLink
					className="flex items-center justify-center w-[32px] h-[32px] rounded-md hover:bg-[var(--color-background-user-info-hover)]"
					onClick={toggle}
				>
					<SettingIcon />
				</RippleButtonOrLink>
			</div>
		</div>
	);
};
