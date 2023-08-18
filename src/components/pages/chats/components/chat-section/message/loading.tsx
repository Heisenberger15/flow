import { cn } from "@/utils";

const MessageLoading = ({
	isCurrentUser,
	width,
	height,
}: {
	isCurrentUser: boolean;
	height: number;
	width: number;
}) => {
	return (
		<div
			style={{ width, height }}
			className={cn(
				"animate-pulse",
				` px-3 py-2 rounded-[0.9375rem] select-text w-fit min-w-[165px] max-w-full ipad:max-w-[680px] transition-all`,
				isCurrentUser ? "!ml-auto bg-[#1566A3]" : "bg-[#393c49]",
				isCurrentUser
					? "rounded-br-[0.375rem] rounded-tr-[0.375rem]"
					: "rounded-bl-[0.375rem] rounded-tl-[0.375rem]",
			)}
		></div>
	);
};

export default MessageLoading;
