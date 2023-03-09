import React, { CSSProperties, memo, useMemo } from "react";
import { classNames } from "shared/lib";
import cls from "./Avatar.module.scss";

interface Props {
	src: string;
	size?: number;
	alt?: string;
	className?: string;
}

export const Avatar = memo(({ src, size = 100, alt, className = "" }: Props): JSX.Element => {
	const style: CSSProperties = useMemo(() => ({ width: `${size}px`, height: `${size}px` }), [size]);

	return <img className={classNames(cls.img, className)} src={src} alt={alt} style={style} />;
});
