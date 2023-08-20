import {
	convertData,
	initChatMessage,
} from "@/components/pages/chats/components/chat-section/constants/dummy";
import { ChatType } from "@/types";
import { WorkerMessageData } from "@/types";

onmessage = function ({ data }: { data: WorkerMessageData["WORKER"] }) {
	if (data.type === "CONVERT_MESSAGE_DATA") {
		const workerResult = data.data
			?.reduce<ChatType[][]>(convertData, [[initChatMessage]])
			.filter((mes, inx) => {
				if (inx !== 0) return mes;
			});

		postMessage({
			data: workerResult,
			type: "CONVERT_MESSAGE_DATA",
		} as WorkerMessageData["GET"]);
	}
};
