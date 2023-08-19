"use client";

import { CustomImageContainerProps } from "@/types";
import { useState } from "react";
import { ImageFallback, CustomImageWrapper, ImageComp } from "./components";

export function CustomImage({
	isLoading = false,
	quality = 65,
	alt = "image",
	className,
	imageClassName = className,
	fallbackImage,
	src,
	...rest
}: CustomImageContainerProps) {
	const [imageHasError, setImageHasError] = useState<boolean>(false);
	const [imageLoaded, setImageLoaded] = useState<boolean>(false);

	const props = {
		wrapper: {
			isLoading,
			className,
		},
		fallback: {
			alt,
			imageLoaded,
			fallbackImage,
			imageClassName,
			imageHasError,
		},
		avatar: {
			isLoading,
			quality,
			alt,
			imageHasError,
			imageClassName,
			setImageHasError,
			setImageLoaded,
			src,
			...rest,
		},
	};

	return (
		<CustomImageWrapper {...props.wrapper}>
			<ImageFallback {...props.fallback} />
			<ImageComp {...props.avatar} />
		</CustomImageWrapper>
	);
}
