"use client";

import { useCallback } from "react";
import { PanInfo, motion, useMotionValue } from "framer-motion";
import ChatListSection from "./components/chat-list";
import { useMediaQuery } from "@mantine/hooks";
import { cn } from "@/utils";
import { useHandleMenu } from "@/stores";

const Sidebar = () => {
	const Width = useMotionValue(350);
	const matches = useMediaQuery("(min-width: 868px)");
	const { isMenuOpen } = useHandleMenu();

	const handleDrag = useCallback(
		(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
			const newWidth = Width.get() + info.delta.x;
			if (newWidth > 250 && newWidth < Math.max(window.innerWidth / 2, 400)) {
				Width.set(Width.get() + info.delta.x);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	return (
		<aside
			className={cn(
				"w-full fixed top-0 lt:relative transition-all",
				isMenuOpen ? "right-0" : "right-[20%] lt:right-0",
			)}
		>
			<motion.div
				style={{ width: matches ? Width : "100%" }}
				className="grid grid-cols-[auto_3px] min-w-full"
			>
				<ChatListSection />
				<motion.div
					drag="x"
					dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
					className="h-full w-full bg-[var(--color-background)] cursor-w-resize hidden lt:block"
					dragElastic={0}
					dragMomentum={false}
					onDrag={handleDrag}
				></motion.div>
			</motion.div>
		</aside>
	);
};

export default Sidebar;
