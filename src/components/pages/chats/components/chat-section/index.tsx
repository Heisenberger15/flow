"use client";

import { ScrollToView, cn, guidGenerator, randamChoice, sleep } from "@/utils";
import { useMemo, useState } from "react";
import {
	chatDummyData,
	users,
	initChatMessage,
	convertData,
} from "./constants/dummy";
import { ChatType } from "./types/message";
import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useIsomorphicEffect } from "@mantine/hooks";
import MessageLoading from "./message/loading";
import ChatSectionLoading, {
	widthForGenereteMessageSize,
	heightForGenereteMessageSize,
} from "./chat-section-loading";

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
	const [dummy, setDummy] = useState(chatDummyData);

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

		setDummy((prev) => [...prev, fakeNewChat]);
	};

	const result = useMemo(() => {
		return dummy
			?.reduce<ChatType[][]>(convertData, [[initChatMessage]])
			.filter((mes, inx) => {
				if (inx !== 0) return mes;
			});
	}, [dummy]);
	const [isMounted, setMounted] = useState(false);

	useIsomorphicEffect(() => {
		ScrollToView("bottom-divider", {
			block: "end",
			inline: "end",
			behavior: "smooth",
		});

		sleep(1000).then(() => {
			setMounted(true);
		});
	}, [result]);

	return (
		<section
			onClick={click}
			className={cn(
				"scrollbar",
				!isMounted ? "overflow-hidden" : "overflow-y-scroll",
			)}
		>
			<ul className="flex flex-col gap-4 w-full max-w-[95%] mx-auto h-fit">
				<li id="top-divider" className="pt-[52px]" />
				{isMounted ? (
					<AnimatePresence initial={false}>
						{result?.map((chats, inx) => (
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
