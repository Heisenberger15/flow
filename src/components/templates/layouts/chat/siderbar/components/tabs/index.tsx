import { type SetStateAction, type Dispatch, useState } from "react";
import { MobileTabs } from "./mobile";
import { DesktopTabs } from "./desktop";

const tabs = [
	{ id: "all", label: "All" },
	{ id: "personal", label: "Personal" },
	{ id: "projects", label: "Projects" },
	{ id: "uni", label: "UNI" },
	{ id: "groups", label: "Groups" },
	{ id: "channels", label: "Channels" },
	{ id: "fav", label: "Fav" },
	{ id: "unread", label: "Unread" },
];

export const Tabs = ({
	variants = "desktop",
}: {
	variants: "mobile" | "desktop";
}) => {
	const [activeTab, setActiveTab] = useState(tabs[0].id);

	return (
		<>
			{variants === "desktop" ? (
				<DesktopTabs {...{ activeTab, setActiveTab, tabs }} />
			) : (
				<MobileTabs {...{ activeTab, setActiveTab, tabs }} />
			)}
		</>
	);
};

export interface TabsProps {
	tabs: typeof tabs;
	activeTab: string;
	setActiveTab: Dispatch<SetStateAction<string>>;
}
