"use client";

import { useChatWorker } from "./useChatWorker";

export const useChats = () => {
	return { worker: useChatWorker };
};
