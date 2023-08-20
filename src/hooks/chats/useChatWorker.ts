"use client";

import { ChatType, WorkerMessageData } from "@/types";
import { useCallback, useEffect, useReducer, useRef } from "react";

type reducerType = {
	convertedDataMessage: ChatType[][];
	placeHolder: boolean;
};

export const useChatWorker = ({ data }: { data: ChatType[] }) => {
	const worker = useRef<Worker>(
		new Worker(new URL("src/workers/chats", import.meta.url)),
	);

	const [state, updateEvent] = useReducer(
		(prev: reducerType, next: Partial<reducerType>) => {
			return { ...prev, ...next };
		},
		{
			convertedDataMessage: [],
			placeHolder: true,
		},
	);

	const convertMessageFormat = useCallback(() => {
		if (!worker.current) return;

		worker.current.postMessage({ type: "CONVERT_MESSAGE_DATA", data });
		worker.current.onmessage = function ({
			data,
		}: {
			data: WorkerMessageData["GET"];
		}) {
			if (data.type === "CONVERT_MESSAGE_DATA") {
				updateEvent({ convertedDataMessage: data.data, placeHolder: false });
			}
		};
	}, [data]);

	useEffect(convertMessageFormat, [convertMessageFormat]);
	return { format: state };
};
