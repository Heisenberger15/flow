"use client";

import { useSearchParams } from "next/navigation";
import Topbar from "./components/topbar";
import ChatSection from "./components/chat-section";
import MessageInput from "./components/message-input";

const ChatPage = () => {
	const searchParams = useSearchParams();

	const chatId = searchParams.get("id");
	if (!chatId)
		return (
			<div className="h-full w-full flex justify-center items-center">
				<span className="text-[12px] h-[31.66px] p-3 bg-[var(--color)] bg-opacity-20 rounded-[17px] backdrop-blur-[10px] justify-center items-center gap-2.5 inline-flex">
					Select chat to start messaging
				</span>
			</div>
		);

	return (
		<div className="w-full h-full relative">
			<Topbar />
			<div className="grid grid-rows-[1fr_auto] h-full max-h-screen">
				<ChatSection />
				<MessageInput />
			</div>
		</div>
	);
};

export default ChatPage;
