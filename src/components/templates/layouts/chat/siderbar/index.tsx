import { Folders, Tabs, Searchbar } from "./components";

const Sidebar = () => {
	return (
		<aside className="w-[428px] grid grid-cols-[80px_auto]">
			<Tabs />
			<div>
				<Searchbar />
				<Folders />
			</div>
		</aside>
	);
};

export default Sidebar;
