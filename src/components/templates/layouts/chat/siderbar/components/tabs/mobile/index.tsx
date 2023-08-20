import { cn } from "@/utils";
import { motion } from "framer-motion";
import { TabsProps } from "..";

export function MobileTabs({ activeTab, setActiveTab, tabs }: TabsProps) {
	return (
		<div className="lt:hidden flex gap-x-1 w-full max-w-[95%] mx-auto overflow-x-scroll scrollbar">
			{tabs.map((tab) => (
				<button
					key={tab.id}
					onClick={() => setActiveTab(tab.id)}
					className="relative rounded-full px-3 py-1.5 text-sm font-medium transition focus-visible:outline-0"
					style={{
						WebkitTapHighlightColor: "transparent",
					}}
				>
					{activeTab === tab.id && (
						<motion.span
							layoutId="bubble"
							className="absolute inset-0 z-10 bg-[var(--color-background-tabs)]"
							style={{ borderRadius: 9999 }}
							transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
						/>
					)}
					<span
						className={cn(
							"text-[var(--color)] z-20 relative",
							activeTab === tab.id ? "" : "hover:opacity-[0.6]",
						)}
					>
						{tab.label}
					</span>
				</button>
			))}
		</div>
	);
}
