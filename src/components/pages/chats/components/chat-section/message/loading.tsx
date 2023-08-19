import { cn } from "@/utils";

const MessageLoading = ({
	width,
	height,
}: {
	height: number;
	width: number;
}) => {
	return (
		<div
			style={{ width, height }}
			className={cn(
				"animate-pulse",
				` px-3 py-2 rounded-[0.9375rem] select-text w-fit min-w-[165px] max-w-full ipad:max-w-[680px] transition-all`,
			)}
		></div>
	);
};

export default MessageLoading;
