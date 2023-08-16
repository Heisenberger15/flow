// import { useLayoutEffect } from "react";
import { ArrayFeatures } from "@/utils";
import Message from "./message";
// import { ScrollToView } from "@/utils";

const ChatSection = () => {
	const createFakeArray = new ArrayFeatures().createFakeArray;
	return (
		<section className="flex flex-col-reverse overflow-y-scroll scrollbar">
			<ul className="flex flex-col gap-12 w-full max-w-[95%] mx-auto">
				<li id="top-divider" className="pt-[80px]" />
				{createFakeArray(40).map((i) => (
					<Message key={i} />
				))}
				<li id="bottom-divider" />
			</ul>
		</section>
	);
};

export default ChatSection;
