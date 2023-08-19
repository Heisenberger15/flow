import Image from "next/image";
import { CustomImageProps } from "@/types";
import { cn } from "@/utils";

export const ImageComp = ({
	alt,
	imageClassName,
	imageHasError,
	setImageHasError,
	setImageLoaded,
	// eslint-disable-next-line no-unused-vars
	isLoading,
	src,
	...rest
}: CustomImageProps) => {
	if (imageHasError) return null;

	return (
		<Image
			draggable={false}
			alt={alt}
			src={src}
			{...rest}
			className={cn(
				"image_fadeIn transition-all w-full h-full object-cover object-center bg-[var(--color-background-image)]",
				imageClassName,
			)}
			onError={({ currentTarget }) => {
				setImageHasError(true);
				setImageLoaded(false);
				currentTarget.onerror = null; // prevents looping
			}}
			onLoadingComplete={(image) => {
				image.classList.remove("image_fadeIn");
				setImageLoaded(true);
			}}
		/>
	);
};
