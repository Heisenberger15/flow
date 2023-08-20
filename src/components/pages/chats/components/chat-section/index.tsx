"use client";

import { ScrollToView, cn, guidGenerator, randamChoice, sleep } from "@/utils";
import { useState } from "react";
import { chatDummyData, users } from "./constants/dummy";
import { ChatType } from "@/types";
import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useIsomorphicEffect } from "@mantine/hooks";
import MessageLoading from "./message/loading";
import ChatSectionLoading, {
	widthForGenereteMessageSize,
	heightForGenereteMessageSize,
} from "./chat-section-loading";
import { useChats } from "@/hooks";

const Message = dynamic(() => import("./message"), {
	ssr: false,
	loading: () => (
		<MessageLoading
			width={randamChoice(widthForGenereteMessageSize)}
			height={randamChoice(heightForGenereteMessageSize)}
		/>
	),
});

const Avatar = dynamic(
	() => import("@/components/atoms").then((c) => c.Avatar),
	{
		ssr: false,
		loading: () => (
			<AvatarFallbackComponent className="sticky bottom-4 w-[40px] h-[40px]" />
		),
	},
);

const ChatSection = () => {
	const [data, setData] = useState(chatDummyData);
	const [isMounted, setMounted] = useState(false);

	const {
		format: { convertedDataMessage, placeHolder },
	} = useChats().worker({ data });

	const click = () => {
		const fakeNewChat: ChatType = {
			id: guidGenerator(),
			files: [""],
			repliedMessage: null,
			sender: randamChoice(users),
			message:
				"Verify whether the User can share images, videos, documents, etc",
			created_at: "12:45pm",
			updated_at: "12:45pm",
			status: {
				view: "seen",
			},
		};

		setData((prev) => [...prev, fakeNewChat]);
	};

	useIsomorphicEffect(() => {
		ScrollToView("bottom-divider", {
			block: "end",
			inline: "end",
			behavior: "smooth",
		});

		sleep(1000).then(() => {
			setMounted(true);
		});
	}, [convertedDataMessage]);

	return (
		<section onClick={click} className={"scrollbar overflow-y-scroll"}>
			<ul className="flex flex-col gap-4 w-full max-w-[95%] mx-auto h-fit">
				<li id="top-divider" className="pt-[52px]" />
				{isMounted && !placeHolder ? (
					<AnimatePresence initial={false}>
						{convertedDataMessage?.map((chats, inx) => (
							<li
								key={inx}
								className={cn(
									"relative flex gap-3 items-end",
									chats?.[0]?.sender?.id === 1 ? "justify-end" : "",
								)}
							>
								{chats?.[0]?.sender?.id !== 1 ? (
									<Avatar
										className="sticky bottom-4 w-[40px] h-[40px]"
										size={40}
										src={chats?.[0]?.sender?.profilePicUrl}
										alt={`${chats?.[0]?.sender?.name || "user"} profile image`}
									/>
								) : null}
								<ul
									className={`flex flex-col gap-2 ${
										chats?.[0]?.sender?.id === 1
											? "justify-start [&>li_div]:!ml-auto [&>li_div]:bg-[var(--color-background-chat-message-primary)] [&>li_div]:rounded-br-[0.375rem] [&>li_div]:rounded-tr-[0.375rem]"
											: "justify-end [&>li_div]:bg-[var(--color-background-chat-message-secondary)] [&>li_div]:rounded-bl-[0.375rem] [&>li_div]:rounded-tl-[0.375rem]"
									}`}
								>
									{chats?.map(
										(
											{
												id,
												files,
												sender,
												repliedMessage,
												message,
												created_at,
												updated_at,
												status,
											},
											index: number,
										) => {
											return (
												<motion.li
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{ opacity: 0 }}
													key={id}
												>
													<Message
														id={id}
														files={files}
														sender={sender}
														firstMessageBlock={index === 0}
														lastMessageBlock={index === chats.length - 1}
														repliedMessage={repliedMessage}
														message={message}
														isCurrentUser={sender?.id === 1}
														created_at={created_at}
														updated_at={updated_at}
														status={status}
													/>
												</motion.li>
											);
										},
									)}
								</ul>
							</li>
						))}
					</AnimatePresence>
				) : (
					<ChatSectionLoading />
				)}
				<li id="bottom-divider" className="pt-[6px]" />
			</ul>
		</section>
	);
};

export default ChatSection;
