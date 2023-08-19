import { cn } from "@/utils";
import { CustomFallbackProps } from "@/types";
import Image from "next/image";

export function ImageFallback({
	imageClassName,
	imageLoaded,
	alt,
	imageHasError,
	// eslint-disable-next-line no-unused-vars
	isLoading,
	fallbackImage,
	...rest
}: CustomFallbackProps) {
	if (!imageLoaded && imageHasError)
		return (
			<Image
				draggable={false}
				alt={alt}
				placeholder="blur"
				{...rest}
				src={fallbackImage}
				fetchPriority="low"
				className={cn(
					"transition-all image_fadeIn w-full h-full object-cover object-center bg-[var(--color-background-image)]",
					imageClassName,
				)}
				onLoadingComplete={(image) => {
					image.classList.remove("image_fadeIn");
				}}
			/>
		);
}
