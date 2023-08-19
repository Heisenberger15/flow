// TODO: update type and refactor it

import { useAutosizeTextArea } from "@/hooks";
import { useRef } from "react";
import {
	Controller,
	SubmitHandler,
	UseFormHandleSubmit,
	Control,
} from "react-hook-form";

interface FormValues {
	text: string;
}
export interface ITextarea {
	handleSubmit: UseFormHandleSubmit<FormValues>;
	control: Control<FormValues, any>;
	text: string;
}
const TextareaForm = ({ handleSubmit, text, control }: ITextarea) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	useAutosizeTextArea(textAreaRef.current, text);

	const onSubmit: SubmitHandler<FormValues> = async ({ text }: any) => {
		console.log("🚀 ~  ~ text", text);
	};

	return (
		<form
			className="w-full h-full min-h-[inherit] max-h-[inherit] flex-1"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Controller
				control={control}
				name="text"
				render={({ field }: any) => (
					<textarea
						required
						onKeyUp={(e) => {
							if (e.key === "Enter" && !e.shiftKey) onSubmit({ text });
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter" && !e.shiftKey) e.preventDefault();
						}}
						{...field}
						ref={textAreaRef}
						rows={1}
						placeholder={`Message #general`}
						className="scrollbar-hide align-middle w-full min-h-[inherit] p-3 max-h-[inherit] h-full resize-none text-[14px] border-[0.1px] !border-transparent !shadow-none !outline-0 bg-transparent"
					/>
				)}
			/>
		</form>
	);
};

export default TextareaForm;
