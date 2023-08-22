import dynamic from "next/dynamic";
import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";
import { ArrowIcon, RippleButtonOrLink } from "@/components/atoms";
import { useHandleMenu } from "@/stores";

const Avatar = dynamic(
	() => import("@/components/atoms").then((c) => c.Avatar),
	{
		ssr: false,
		loading: () => (
			<AvatarFallbackComponent className="sticky bottom-4 w-[40px] h-[40px]" />
		),
	},
);

const Topbar = () => {
	const { setMenuOpen } = useHandleMenu();

	const showList = () => setMenuOpen(true);

	return (
		<header className="w-full h-[56px] bg-[var(--color-background-chat-header)] backdrop-blur absolute left-0 top-0 z-50 shadow-2xl">
			<nav className="max-w-[95%] h-full mx-auto flex items-center justify-between">
				<div className="flex items-center gap-2">
					<RippleButtonOrLink
						onClick={showList}
						className="w-[40px] h-[40px] rounded-full flex items-center justify-center lt:hidden"
					>
						<ArrowIcon className="rotate-90 [&_path]:stroke-[var(--color-arrow)]" />
					</RippleButtonOrLink>
					<Avatar className="h-[40px] w-[40px]" src={""} alt={""} />

					<div>
						<h3 className="font-medium text-[1.125rem]">flow</h3>
						<span className="text-[0.875rem] text-[var(--color-secondary)]">
							last seen recently
						</span>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Topbar;
