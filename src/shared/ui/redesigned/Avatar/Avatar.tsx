import React, { CSSProperties, memo, useMemo } from "react";
import { classNames } from "@/shared/lib";
import { UserIcon } from "@/shared/assets";
import { HStack } from "../Stack";
import { AppImage } from "../AppImage/AppImage";
import { Skeleton } from "../Skeleton/Skeleton";
import { Text } from "../Text/Text";
import cls from "./Avatar.module.scss";

interface Props {
	src?: string;
	size?: number;
	alt?: string;
	title?: string;
	subTitle?: string;
	className?: string;
	wrapperClassName?: string;
}

export const Avatar = memo(
	({
		src,
		size = 100,
		alt = "avatar",
		title,
		subTitle,
		className = "",
		wrapperClassName = "",
	}: Props): JSX.Element => {
		const style: CSSProperties = useMemo(
			() => ({
				width: `${size}px`,
				height: `${size}px`,
			}),
			[size],
		);

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

		if (title || subTitle) {
			return (
				<HStack gap={8} className={wrapperClassName}>
					<AppImage
						errorFallback={<UserIcon className={cls.userIcon} />}
						fallback={<Skeleton width={size} height={size} border="50%" />}
						className={classNames(cls.img, className)}
						src={src}
						alt={alt}
						style={style}
					/>
					{!!title && <Text text={title} bold />}
					{!!subTitle && <Text text={subTitle} />}
				</HStack>
			);
		}

		return (
			<AppImage
				errorFallback={<UserIcon className={cls.userIcon} />}
				fallback={<Skeleton width={size} height={size} border="50%" />}
				className={classNames(cls.img, className)}
				src={src}
				alt={alt}
				style={style}
			/>
		);
	},
);
