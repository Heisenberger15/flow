import { ScrollToView, cn } from "@/utils";
import Image from "next/image";
import { memo, useMemo } from "react";
import { viewStatus } from "../utils/view-status";
import { MessageType } from "@/types";

const Message = ({
	id,
	isCurrentUser,
	message,
	sender,
	created_at,
	updated_at,
	status,
	repliedMessage,
	firstMessageBlock,
	lastMessageBlock,
}: MessageType) => {
	const status_view = useMemo(() => viewStatus(status.view), [status.view]);

	const moveToRepliedMessage = () => {
		if (!repliedMessage?.id) return;
		ScrollToView(`${repliedMessage.id}`, {
			block: "center",
			inline: "nearest",
			behavior: "smooth",
		});
	};

	return (
		<>
			<div
				className={cn(
					`px-3 py-2 rounded-[0.9375rem] select-text flex flex-col gap-2 w-fit min-w-[165px] max-w-full ipad:max-w-[680px] border border-solid`,
					isCurrentUser
						? "border-[var(--color-background-chat-message-primary)]"
						: "",
					status_view.title === "rejected" && isCurrentUser
						? "border-[var(--color-error)]"
						: "border-transparent",

					isCurrentUser
						? "rounded-br-[0.375rem] rounded-tr-[0.375rem]"
						: "rounded-bl-[0.375rem] rounded-tl-[0.375rem]",
					isCurrentUser
						? lastMessageBlock && "!rounded-br-none !rounded-tr-[0.9375rem]"
						: lastMessageBlock && "!rounded-bl-none !rounded-tl-[0.9375rem]",
					isCurrentUser
						? firstMessageBlock && "!rounded-tr-[0.9375rem]"
						: firstMessageBlock && "!rounded-tl-[0.9375rem]",
				)}
				id={`${id}`}
			>
				{firstMessageBlock && !isCurrentUser ? (
					<p className="text-[14px] pt-2">
						{sender?.name}
						{id} --- {repliedMessage?.id}
					</p>
				) : null}
				{repliedMessage ? (
					<button
						onClick={moveToRepliedMessage}
						className={cn(
							"text-[14px] px-3 my-2 border-0 text-left border-l-[3px]  border-solid border-[var(--color-border-replied)]",
							isCurrentUser
								? "border-[var(--color-border-replied-primary)]"
								: "border-[var(--color-border-replied-secondary)]",
						)}
					>
						<p className="pb-1">{repliedMessage?.sender?.name}</p>
						<p className="pt-1 line-clamp-1 ">{repliedMessage?.message}</p>
					</button>
				) : null}
				<pre
					className={`min-h-[24px] text-[14px] mg:text-[14.5px] 
								shadow-(0px_2px_48px_rgba(0, 0, 0, 0.04)] 
                                whitespace-pre-wrap	break-words font-montserrat`}
				>
					{message}
				</pre>
				<div className="flex items-center justify-end gap-3">
					<time className="text-[12px]" title={created_at.toString()}>
						{created_at as string}
					</time>
					<>
						{status_view.show && isCurrentUser ? (
							<Image
								className="select-none"
								draggable="false"
								src={status_view.src}
								width={status_view.size}
								height={status_view.size}
								alt={status_view.alt}
								title={status_view.title}
							/>
						) : null}
					</>
				</div>
			</div>
		</>
	);
};

export default memo(Message);
