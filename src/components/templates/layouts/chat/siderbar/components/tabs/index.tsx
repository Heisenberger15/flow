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
		<ul className="bg-[#101010e3] flex flex-col">
			<Tab>
				<div className="bg-cyan-950 rounded-full w-[50px] h-[50px] flex items-center justify-center text-[18px] font-semibold uppercase">
					<p>{convertStringLabel("sina parsa")}</p>
				</div>
			</Tab>
			<Tab>
				<div className="bg-cyan-950 rounded-full w-[50px] h-[50px] flex items-center justify-center text-[18px] font-semibold uppercase">
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
