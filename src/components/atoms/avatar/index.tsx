import { AvatarContainerProps } from "@/types";
import AvatarPlaceholder from "@/assets/placeholders/avatar.png";
import { cn } from "@/utils";
import { CustomImage } from "../image";

export function Avatar({
	isLoading = false,
	quality = 65,
	width = 50,
	height = 50,
	alt = "avatar image",
	className,
	...rest
}: AvatarContainerProps) {
	return (
		<CustomImage
			{...{
				isLoading,
				quality,
				width,
				height,
				alt,
				className: cn("!rounded-full !aspect-square", className),
				fallbackImage: AvatarPlaceholder,
				...rest,
			}}
		/>
	);
}
