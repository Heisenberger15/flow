"use client";

import { ScrollToView, cn, guidGenerator, randamChoice } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import Message from "./message";
import { chatDummyData, users, initChatMessage } from "./constants/dummy";
import { ChatType } from "./types/message";
import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

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

	const convertData = (acc: ChatType[][], curr: ChatType) => {
		const lastIndexOfArray = acc.at(-1);
		if (
			lastIndexOfArray &&
			lastIndexOfArray?.[0]?.sender?.id === curr?.sender?.id
		) {
			lastIndexOfArray?.push(curr);
		} else {
			acc?.push([curr]);
		}
		return acc;
	};
	const result = useMemo(() => {
		return dummy
			?.reduce<ChatType[][]>(convertData, [[initChatMessage]])
			.filter((mes, inx) => {
				if (inx !== 0) return mes;
			});
	}, [dummy]);

	useEffect(() => {
		ScrollToView("bottom-divider", { block: "end", inline: "end" });
	}, [result]);

	return (
		<section
			onClick={click}
			className="flex flex-col-reverse overflow-y-scroll scrollbar"
		>
			<ul className="flex flex-col gap-4 w-full max-w-[95%] mx-auto">
				<li id="top-divider" className="pt-[52px]" />{" "}
				<AnimatePresence initial={false}>
					{result?.map((chats, inx) => (
						<motion.li
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
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
							<ul className="flex flex-col gap-2">
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
												className="flex items-end"
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
						</motion.li>
					))}
				</AnimatePresence>
				<li id="bottom-divider" />
			</ul>
		</section>
	);
};

export default ChatSection;
