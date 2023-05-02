import { ReactNode, CSSProperties, HTMLAttributes } from "react";
import { classNames } from "@/shared/lib";
import cls from "./Flex.module.scss";

type FlexJustify = "start" | "end" | "center" | "between" | "around";
type FlexAlign = "start" | "end" | "center" | "baseline" | "stretch";
type FlexDirection = "row" | "column";
type FlexGap = 4 | 8 | 16 | 24 | 32;

const justifyClasses: Record<FlexJustify, string> = {
	start: cls.justifyStart,
	end: cls.justifyEnd,
	center: cls.justifyCenter,
	between: cls.justifyBetween,
	around: cls.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
	start: cls.alignStart,
	end: cls.alignEnd,
	center: cls.alignCenter,
	baseline: cls.alignBaseline,
	stretch: cls.alignStretch,
};

const directionClasses: Record<FlexDirection, string> = {
	row: cls.directionRow,
	column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
	4: cls.gap4,
	8: cls.gap8,
	16: cls.gap16,
	24: cls.gap24,
	32: cls.gap32,
};

export interface FlexProps extends HTMLAttributes<Element> {
	children: ReactNode;
	as?: keyof JSX.IntrinsicElements;
	className?: string;
	justify?: FlexJustify;
	align?: FlexAlign;
	direction?: FlexDirection;
	gap?: FlexGap;
	max?: boolean;
	style?: CSSProperties;
}

export const Flex = ({
	children,
	as = "div",
	className,
	justify = "start",
	align = "center",
	direction = "row",
	gap = 8,
	max = false,
	style,
	...otherProps
}: FlexProps): JSX.Element => {
	const Tag = as;
	const classes = classNames(
		cls.flex,
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		gapClasses[gap],
		{ [cls.max]: max },
		className
	);

	return (
		<Tag style={style} className={classes} {...otherProps}>
			{children}
		</Tag>
	);
};
