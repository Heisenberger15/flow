import { AvatarContainerProps } from "@/types";
import AvatarPlaceholder from "@/assets/placeholders/avatar.png";
import { cn } from "@/utils";
import { CustomImage } from "../image";

export function Avatar({
	isLoading = false,
	quality = 65,
	size = 50,
	alt = "avatar image",
	className,
	src,
	...rest
}: AvatarContainerProps) {
	return (
		<CustomImage
			{...{
				isLoading,
				quality,
				width: size,
				height: size,
				alt,
				src: AvatarPlaceholder,
				className: cn("!rounded-full !aspect-square", className),
				fallbackImage: AvatarPlaceholder,
				...rest,
			}}
		/>
	);
}
