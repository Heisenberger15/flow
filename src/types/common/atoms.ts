import type { ImageProps, StaticImageData } from "next/image";
import type { Dispatch, SetStateAction, PropsWithChildren } from "react";

// Custom Image

export interface CustomImageContainerProps extends ImageProps {
	isLoading?: boolean;
	fallbackImage: StaticImageData;
	imageClassName?: string;
}

export type CustomFallbackProps = Omit<CustomImageContainerProps, "src"> & {
	imageLoaded: boolean;
	imageHasError: boolean;
};

export type CustomImageProps = Omit<
	CustomImageContainerProps,
	"fallbackImage"
> & {
	imageHasError: boolean;
	setImageHasError: Dispatch<SetStateAction<boolean>>;
	setImageLoaded: Dispatch<SetStateAction<boolean>>;
};

export type CustomWrapperProps = PropsWithChildren<{
	isLoading?: boolean;
	className?: string;
}>;

// Custom Image

// AVATAR

export interface AvatarContainerProps
	extends Omit<
		CustomImageContainerProps,
		"fallbackImage" | "height" | "width"
	> {
	size?: number | `${number}`;
}

//AVATAR
