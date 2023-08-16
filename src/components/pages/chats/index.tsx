"use client";

import { useSearchParams } from "next/navigation";
import Topbar from "./components/topbar";
import ChatSection from "./components/chat-section";
import MessageInput from "./components/message-input";

const ChatPage = () => {
	const searchParams = useSearchParams();

	const chatId = searchParams.get("id");
	if (!chatId) return null;

	return (
		<div className="w-full h-full relative">
			{/* <div>{chatId}</div> */}
			<Topbar />
			<div className="grid grid-rows-[1fr_78px] h-full max-h-screen">
				<ChatSection />
				<MessageInput />
			</div>
		</div>
	);
};

export default ChatPage;
