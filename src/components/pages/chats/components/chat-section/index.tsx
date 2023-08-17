import { cn } from "@/utils";
import { useMemo } from "react";
import Message from "./message";
import { chatDummyData } from "./constants/dummy";
import { ChatType } from "./types/message";
import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";
import dynamic from "next/dynamic";

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
	const convertData = (acc: any[], curr: { sender: { id: any } }) => {
		const lastArr = acc?.[acc?.length - 1];

		if (lastArr && lastArr?.[0]?.sender?.id === curr?.sender?.id) {
			lastArr?.push(curr);
		} else {
			acc?.push([curr]);
		}
		return acc;
	};
	const result = useMemo(
		() =>
			chatDummyData
				?.reduce(convertData, [{ sender: { id: null as unknown as number } }])
				?.filter((i) => i?.[0]?.sender?.id) || [],

		// eslint-disable-next-line react-hooks/exhaustive-deps
		[chatDummyData],
	) as ChatType[][];

	return (
		<section className="flex flex-col-reverse overflow-y-scroll scrollbar">
			<ul className="flex flex-col gap-4 w-full max-w-[95%] mx-auto">
				<li id="top-divider" className="pt-[52px]" />
				{result?.map((chats, inx) => (
					<li
						key={inx}
						className={cn(
							"relative flex gap-3 items-end",
							chats?.[0]?.sender?.id === 2 ? "justify-end" : "",
						)}
					>
						{chats?.[0]?.sender?.id !== 2 ? (
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
										<li key={id} className="flex items-end">
											<Message
												id={id}
												files={files}
												sender={sender}
												firstMessageBlock={index === 0}
												lastMessageBlock={index === chats.length - 1}
												repliedMessage={repliedMessage}
												message={message}
												isCurrentUser={sender?.id === 2}
												created_at={created_at}
												updated_at={updated_at}
												status={status}
											/>
										</li>
									);
								},
							)}
						</ul>
					</li>
				))}
				<li id="bottom-divider" />
			</ul>
		</section>
	);
};

export default ChatSection;
