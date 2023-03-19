import { classNames } from "shared/lib";
import { CSSProperties, memo, useMemo } from "react";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
	className?: string;
	height?: string | number;
	width?: string | number;
	border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
	const { className, height, width, border } = props;

	const styles: CSSProperties = useMemo(
		() => ({
			width,
			height,
			borderRadius: border,
		}),
		[height, width, border]
	);

	return <div className={classNames(cls.Skeleton, className)} style={styles} />;
});
