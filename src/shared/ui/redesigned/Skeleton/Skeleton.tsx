import { CSSProperties, memo, useMemo } from "react";
import { classNames, toggleFeatures } from "@/shared/lib";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
	className?: string;
	height?: string | number;
	width?: string | number;
	border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
	const { className, height, width, border } = props;
	const skeletonCls = toggleFeatures({
		name: "isAppRedesigned",
		on: () => cls.redesigned,
		off: () => cls.deprecated,
	});

	const styles: CSSProperties = useMemo(
		() => ({
			width,
			height,
			borderRadius: border,
		}),
		[height, width, border],
	);

	return <div className={classNames(skeletonCls, className)} style={styles} />;
});
