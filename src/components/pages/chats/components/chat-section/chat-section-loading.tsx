import { chatDummyDataForLoading } from "./constants/dummy";
import AvatarFallbackComponent from "@/components/atoms/avatar/fallback-component";
import MessageLoading from "./message/loading";
import { cn, randamChoice } from "@/utils";
import { useMemo } from "react";

const ChatSectionLoading = () => {
	const result = useMemo(() => chatDummyDataForLoading(), []);

	return (
		<>
			{result?.map((chats, inx) => (
				<li
					key={inx}
					className={cn(
						"relative flex gap-3 items-end",
						chats?.[0]?.sender?.id === 1 ? "justify-end" : "",
					)}
				>
					{chats?.[0]?.sender?.id !== 1 ? (
						<AvatarFallbackComponent className="sticky bottom-4 w-[40px] h-[40px]" />
					) : null}
					<ul
						className={`flex flex-col gap-2 ${
							chats?.[0]?.sender?.id === 1
								? "justify-start [&>li_div]:!ml-auto [&>li_div]:bg-[var(--color-background-chat-message-primary)] [&>li_div]:rounded-br-[0.375rem] [&>li_div]:rounded-tr-[0.375rem]"
								: "justify-end [&>li_div]:bg-[var(--color-background-chat-message-secondary)] [&>li_div]:rounded-bl-[0.375rem] [&>li_div]:rounded-tl-[0.375rem]"
						}`}
					>
						{chats?.map(({ id }) => {
							return (
								<li key={id}>
									<MessageLoading
										width={randamChoice(widthForGenereteMessageSize)}
										height={randamChoice(heightForGenereteMessageSize)}
									/>
								</li>
							);
						})}
					</ul>
				</li>
			))}
		</>
	);
};

export default ChatSectionLoading;

export const widthForGenereteMessageSize = [300, 540, 450, 670, 680];
export const heightForGenereteMessageSize = [140, 70, 110, 90];
