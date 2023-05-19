import React, { CSSProperties, memo, useMemo } from "react";
import { classNames } from "@/shared/lib";
import { HStack } from "../Stack";
import { AppImage } from "../AppImage/AppImage";
import { Skeleton } from "../Skeleton/Skeleton";
import cls from "./Avatar.module.scss";
import { UserIcon } from "@/shared/assets";

interface Props {
	src?: string;
	size?: number;
	alt: string;
	className?: string;
	inverted?: boolean;
}

export const Avatar = memo(({ src, size = 100, alt, className = "", inverted }: Props): JSX.Element => {
	const style: CSSProperties = useMemo(() => ({ width: `${size}px`, height: `${size}px` }), [size]);

	if (!src) {
		return (
			<HStack
				justify="center"
				align="center"
				className={classNames(cls.empty, className)}
				style={style}
			>
				{alt[0]}
			</HStack>
		);
	}

	return (
		<AppImage
			errorFallback={<UserIcon className={inverted ? cls.userIconInverted : cls.userIcon} />}
			fallback={<Skeleton width={size} height={size} border="50%" />}
			className={classNames(cls.img, className)}
			src={src}
			alt={alt}
			style={style}
		/>
	);
});
