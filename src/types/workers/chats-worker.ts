import { ChatType } from "@/types";

export interface WorkerConvertMessageData {
	WORKER: {
		data: ChatType[];
		type: "CONVERT_MESSAGE_DATA";
	};
	GET: {
		data: ChatType[][];
		type: "CONVERT_MESSAGE_DATA";
	};
}

export type WorkerMessageData = WorkerConvertMessageData;
