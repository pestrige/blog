import { ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	fallback?: ReactElement;
	errorFallback?: ReactElement;
}

/**
 * @deprecated
 */

export const AppImage = memo(function AppImage({
	src,
	alt = "image",
	fallback,
	errorFallback,
	...props
}: Props): JSX.Element {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useLayoutEffect(() => {
		const image = new Image();
		image.src = src ?? "";
		image.onload = () => setIsLoading(false);
		image.onerror = () => {
			setIsLoading(false);
			setIsError(true);
		};
	}, [src]);

	if (isLoading && fallback) {
		return fallback;
	}

	if (isError && errorFallback) {
		return errorFallback;
	}

	return <img alt={alt} src={src} {...props} />;
});
