import Tab from "./tab";
import dynamic from "next/dynamic";
import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";
import { convertStringLabel } from "@/utils";

const Avatar = dynamic(
	() => import("@/components/atoms").then((c) => c.Avatar),
	{
		ssr: false,
		loading: () => <AvatarFallbackComponent />,
	},
);
export const Tabs = () => {
	return (
		<ul className="bg-[var(--color-background-tab)] flex flex-col">
			<Tab>
				<div className="bg-[var(--color-user-4)] rounded-full w-[50px] h-[50px] flex items-center justify-center text-[18px] font-semibold uppercase text-[var(--color)]">
					<p>{convertStringLabel("sina parsa")}</p>
				</div>
			</Tab>
			<Tab>
				<div className="bg-[var(--color-user-5)] rounded-full w-[50px] h-[50px] flex items-center justify-center text-[18px] font-semibold uppercase text-[var(--color)]">
					<p>{convertStringLabel("flow")}</p>
				</div>
			</Tab>
			<Tab>
				<Avatar src={""} alt={""} className="w-[50px] h-[50px]" size={50} />
			</Tab>
			<Tab>
				<Avatar src={""} alt={""} className="w-[50px] h-[50px]" size={50} />
			</Tab>
			<Tab>
				<Avatar src={""} alt={""} className="w-[50px] h-[50px]" size={50} />
			</Tab>
			<Tab>
				<Avatar src={""} alt={""} className="w-[50px] h-[50px]" size={50} />
			</Tab>
			<Tab>
				<Avatar src={""} alt={""} className="w-[50px] h-[50px]" size={50} />
			</Tab>
		</ul>
	);
};
