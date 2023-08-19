import { Searchbar, Folders, UserInfo } from "./components";

const ChatListSection = () => {
	return (
		<div className="grid grid-rows-[auto_1fr_auto] bg-[var(--color-background-chat-list)] h-full max-h-screen">
			<Searchbar />
			<Folders />
			<UserInfo />
		</div>
	);
};

export default ChatListSection;
