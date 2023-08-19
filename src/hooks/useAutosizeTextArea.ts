import { Nullable } from "@/types";
import { useState, useEffect } from "react";

export const useAutosizeTextArea = (
	textAreaRef: Nullable<HTMLTextAreaElement>,
	value: string,
) => {
	const [height, setHeight] = useState("0px");
	useEffect(() => {
		// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
		let mount = true;

		if (textAreaRef) {
			textAreaRef.style.height = "0px";
			const scrollHeight = textAreaRef.scrollHeight;
			textAreaRef.style.height = scrollHeight + "px";
			setHeight(scrollHeight + "px");
		}

		return () => {
			mount = false;
		};
	}, [textAreaRef, value]);

	return height;
};
