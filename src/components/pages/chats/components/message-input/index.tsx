"use client";

import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

const TextareaForm = dynamic(() => import("./textarea"), {
	ssr: false,
});

const MessageInput = () => {
	interface FormValues {
		text: string;
	}

	const { handleSubmit, watch, control } = useForm<FormValues>();

	const text = watch("text");
	const props = { handleSubmit, control, text };

	return (
		<footer className="w-full min-h-[60px] pb-[16px] relative max-w-[95%] mx-auto">
			<div
				className="bg-[var(--color-background-chat-input)] -translate-y-[6px]
       w-full min-h-[44px] rounded-[8px] flex px-4 max-h-[200px] justify-between items-end"
			>
				<TextareaForm {...props} />
			</div>
		</footer>
	);
};

export default MessageInput;
