import { ArrayFeatures, randamChoice } from "@/utils";
import { ChatType } from "../types/message";

export const users = [
	{
		name: "Heisenburg",
		profilePicUrl: "",
		id: 1,
	},
	{
		name: "Asghar",
		profilePicUrl: "",
		id: 2,
	},
	{
		name: "Akbar",
		profilePicUrl: "",
		id: 3,
	},
	{
		name: "Soghra",
		profilePicUrl: "",
		id: 4,
	},
	{
		name: "Kobra",
		profilePicUrl: "",
		id: 5,
	},
];

export const chatDummyData: ChatType[] = [
	{
		id: 1,
		files: [""],
		repliedMessage: null,
		sender: users[0],
		message: "Hello from the flow",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 2,
		files: [""],
		repliedMessage: null,
		sender: users[1],
		message: "Verify that “How long can a chat be saved?",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "sent",
		},
	},
	{
		id: 3,
		files: [""],
		repliedMessage: null,

		sender: users[0],
		message:
			"erify whether the User can use Copy and Pasteerify whether the User can use Copy and Pasteerify whether the User can use Copy and Paste in Chat functionality",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "sent",
		},
	},
	{
		id: 4,
		files: [""],
		repliedMessage: null,

		sender: users[0],
		message: "Verify that the User can send any emoticons or not",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "rejected",
		},
	},
	{
		id: 5,
		files: [""],
		repliedMessage: null,

		sender: users[0],
		message: "Verify that the User can share hyperlinked URLs, Emails or not",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 6,
		files: [""],
		repliedMessage: null,

		sender: users[0],
		message: "Verify whether the User can share images, videos, documents, etc",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 7,
		files: [""],
		repliedMessage: {
			id: 4,
			files: [""],
			repliedMessage: null,

			sender: users[0],
			message: "Verify that the User can send any emoticons or not",
			created_at: "12:45pm",
			updated_at: "12:45pm",
			status: {
				view: "rejected",
			},
		},

		sender: users[0],
		message: "the group and visible to every member",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 8,
		repliedMessage: null,
		files: [""],
		sender: users[0],
		message: "Chat should be visible to every group member",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 9,
		files: [""],
		repliedMessage: null,

		sender: users[0],
		message: "with other Users or groups",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 10,
		files: [""],
		repliedMessage: null,

		sender: users[0],
		message:
			"Verify that Users can join current Chat/discussions in their group",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 11,
		files: [""],
		repliedMessage: null,

		sender: users[0],
		message: "Verify that Users can Chat with their group or not",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 12,
		repliedMessage: null,

		files: [""],
		sender: users[0],
		message: "Verify that Users can create a Chat group or not",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 13,
		files: [""],
		repliedMessage: null,

		sender: users[0],
		message: "Verify whether the User can see the time of comment in Chat",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 14,
		repliedMessage: {
			id: 5,
			files: [""],
			repliedMessage: null,

			sender: users[0],
			message: "Verify that the User can share hyperlinked URLs, Emails or not",
			created_at: "12:45pm",
			updated_at: "12:45pm",
			status: {
				view: "seen",
			},
		},
		files: [""],
		sender: users[0],
		message: "Verify that the User can send messages to other offline Users",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 15,
		files: [""],
		repliedMessage: {
			id: 5,
			files: [""],
			repliedMessage: null,

			sender: users[0],
			message: "Verify that the User can share hyperlinked URLs, Emails or not",
			created_at: "12:45pm",
			updated_at: "12:45pm",
			status: {
				view: "seen",
			},
		},
		sender: users[0],
		message:
			"Verify whether the User’s Status (Active, Inactive, Invisible, etc.) is changing or not",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 16,
		files: [""],
		repliedMessage: {
			id: 5,
			files: [""],
			repliedMessage: null,

			sender: users[0],
			message: "Verify that the User can share hyperlinked URLs, Emails or not",
			created_at: "12:45pm",
			updated_at: "12:45pm",
			status: {
				view: "seen",
			},
		},
		sender: users[0],
		message:
			"Verify that Users can send requests to other Users for a chat or not",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 17,
		files: [""],
		repliedMessage: null,

		sender: users[0],
		message: "Verify that the Chat application should be launched or evoked",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 18,
		files: [""],
		repliedMessage: null,

		sender: users[1],
		message:
			"Verify that the Chat application has been installed on two devices at least",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 19,
		files: [""],
		repliedMessage: null,

		sender: users[1],
		message:
			"Verify there is a minimum of two Users who should be available for the chat.",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 20,
		files: [""],
		repliedMessage: {
			id: 18,
			files: [""],
			repliedMessage: null,

			sender: users[0],
			message:
				"Verify that the Chat application has been installed on two devices at least",
			created_at: "12:45pm",
			updated_at: "12:45pm",
			status: {
				view: "sent",
			},
		},
		sender: users[1],
		message: "Test Cases For Chat Application",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "rejected",
		},
	},
	{
		id: 21,
		repliedMessage: null,
		files: [""],
		sender: users[0],
		message: "Chat should be visible to every group member",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 22,
		files: [""],
		repliedMessage: null,

		sender: users[0],
		message: "with other Users or groups",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 23,
		files: [""],
		repliedMessage: null,

		sender: users[0],
		message:
			"Verify that Users can join current Chat/discussions in their group",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 24,
		files: [""],
		repliedMessage: null,

		sender: users[4],
		message:
			"Verify that Users can join current Chat/discussions in their group",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
	{
		id: 25,
		repliedMessage: null,
		files: [""],
		sender: users[3],
		message: "Chat should be visible to every group member2222",
		created_at: "12:45pm",
		updated_at: "12:45pm",
		status: {
			view: "seen",
		},
	},
];

export const initChatMessage: ChatType = {
	id: "INIT_ID",
	files: [""],
	repliedMessage: null,
	sender: {
		name: "INIT_DATA",
		profilePicUrl: "",
		id: -1,
	},
	message: "",
	created_at: "",
	updated_at: "",
	status: {
		view: "sent",
	},
};

export const convertData = (acc: ChatType[][], curr: ChatType) => {
	const lastIndexOfArray = acc.at(-1);
	if (
		lastIndexOfArray &&
		lastIndexOfArray?.[0]?.sender?.id === curr?.sender?.id
	) {
		lastIndexOfArray?.push(curr);
	} else {
		acc?.push([curr]);
	}
	return acc;
};

export const chatDummyDataForLoading = () => {
	const faker = new ArrayFeatures().createFakeArray;

	const result: ChatType[] = faker(25).map((id) => {
		return {
			id,
			files: [""],
			repliedMessage: null,
			sender: randamChoice(users),
			message: "",
			created_at: "",
			updated_at: "",
			status: {
				view: "sent",
			},
		};
	});

	return result
		?.reduce<ChatType[][]>(convertData, [[initChatMessage]])
		.filter((mes, inx) => {
			if (inx !== 0) return mes;
		});
};
