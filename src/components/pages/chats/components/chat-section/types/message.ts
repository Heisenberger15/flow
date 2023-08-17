export interface ChatType {
	id: number;
	files: string[];
	repliedMessage: ChatType | null;
	sender: {
		name: string;
		profilePicUrl: string;
		id: string | number;
	};
	message: string;
	created_at: string | Date;
	updated_at: string | Date;
	status: {
		view: "seen" | "rejected" | "sent";
	};
}

export interface MessageType extends ChatType {
	isCurrentUser: boolean;
	firstMessageBlock: boolean;
}
