import { CSSProperties, memo, useMemo } from "react";
import { classNames } from "@/shared/lib";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
	className?: string;
	height?: string | number;
	width?: string | number;
	border?: string;
}

/**
 * @deprecated
 */

export const Skeleton = memo((props: SkeletonProps) => {
	const { className, height, width, border } = props;

	const styles: CSSProperties = useMemo(
		() => ({
			width,
			height,
			borderRadius: border,
		}),
		[height, width, border],
	);

	return <div className={classNames(cls.skeleton, className)} style={styles} />;
});
