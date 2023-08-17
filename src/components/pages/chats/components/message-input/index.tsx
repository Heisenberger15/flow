"use client";

import { cn } from "@/utils";
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
				className="bg-[#40444B] -translate-y-[6px]
       w-full min-h-[44px] rounded-[8px] flex px-4 max-h-[200px] justify-between items-end"
			>
				<TextareaForm {...props} />
				<>
					{text?.trim()?.length >= 4090 - 10 && (
						<span
							className={cn(
								"absolute right-0 top-2 text-2xl px-[16px]",
								+text?.length >= +4090 && "text-[#ff4260]",
							)}
						>
							{4090 - text.trim().length}
						</span>
					)}
				</>
			</div>
		</footer>
	);
};

export default MessageInput;
