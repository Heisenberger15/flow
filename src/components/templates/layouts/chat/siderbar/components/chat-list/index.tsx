import { Searchbar, Folders, UserInfo } from "./components";
import { Tabs } from "../tabs";

const ChatListSection = () => {
	return (
		<div className="grid grid-rows-[auto_auto_1fr_auto] lt:grid-rows-[auto_1fr_auto] bg-[var(--color-background-chat-list)] h-full max-h-screen">
			<Searchbar />
			<Tabs variants="mobile" />
			<Folders />
			<UserInfo />
		</div>
	);
};

export default ChatListSection;
