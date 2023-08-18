import dynamic from "next/dynamic";
import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";

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
	return (
		<header className="w-full h-[56px] bg-[rgb(44,44,44,0.8)] backdrop-blur absolute left-0 top-0 z-50">
			<nav className="max-w-[95%] h-full mx-auto flex items-center justify-between shadow-2xl">
				<div className="flex items-center gap-2">
					<Avatar className="h-[40px] w-[40px]" src={""} alt={""} />

					<div>
						<h3 className="font-medium text-[1.125rem]">flow</h3>
						<span className="text-[0.875rem] text-[rgb(170,170,170)]">
							last seen recently
						</span>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Topbar;
