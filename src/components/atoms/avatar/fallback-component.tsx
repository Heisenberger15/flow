import { cn } from "@/utils";

const AvatarFallbackComponent = ({
	className = "w-[50px] h-[50px]",
}: {
	className?: string;
}) => {
	return (
		<span
			className={cn(
				"animate-pulse block bg-[#D9D9D9] relative !rounded-full !aspect-square",
				className,
			)}
		></span>
	);
};

export default AvatarFallbackComponent;
