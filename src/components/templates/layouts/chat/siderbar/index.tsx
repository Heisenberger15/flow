"use client";

import { useCallback } from "react";
import { Tabs } from "./components";
import { PanInfo, motion, useMotionValue } from "framer-motion";
import ChatListSection from "./components/chat-list";

const Sidebar = () => {
	const Width = useMotionValue(350);
	const handleDrag = useCallback(
		(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
			const newWidth = Width.get() + info.delta.x;
			if (newWidth > 250 && newWidth < Math.max(window.innerWidth / 2, 400)) {
				Width.set(Width.get() + info.delta.x);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);
	return (
		<aside className="relative grid grid-cols-[80px_auto]">
			<Tabs />
			<motion.div
				style={{ width: Width }}
				className=" grid grid-cols-[auto_3px]"
			>
				<ChatListSection />
				<motion.div
					drag="x"
					dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
					className="h-full w-full bg-[#101010e3] cursor-w-resize"
					dragElastic={0}
					dragMomentum={false}
					onDrag={handleDrag}
				></motion.div>
			</motion.div>
		</aside>
	);
};

export default Sidebar;
