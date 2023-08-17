import { match } from "@/utils";

export const viewStatus = (status: "seen" | "rejected" | "sent") => {
	return match(status, {
		seen: {
			show: true,
			src: "/assets/icons/seen-icon.svg",
			alt: "seen icon",
			title: "seen",
			size: 15,
		},
		rejected: {
			show: true,
			src: "/assets/icons/reject-icon.svg",
			alt: "rejected icon",
			title: "rejected",
			size: 14,
		},
		sent: {
			show: true,
			src: "/assets/icons/sent-icon.svg",
			alt: "sent icon",
			title: "sent",
			size: 10,
		},
		default: { show: false, src: "", alt: "", title: "", size: 10 },
	});
};
