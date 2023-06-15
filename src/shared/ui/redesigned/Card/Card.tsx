import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "@/shared/lib";
import cls from "./Card.module.scss";

type CardVariant = "primary" | "secondary" | "outlined";
type CardPaddings = "none" | "sm" | "md" | "lg";
type CardRadius = "none" | "sm" | "md" | "lg" | "xl";

const borderRadiusClassMap: Record<CardRadius, string> = {
	none: cls.borderNoRadius,
	sm: cls.borderRadiusSm,
	md: cls.borderRadiusMd,
	lg: cls.borderRadiusLg,
	xl: cls.borderRadiusXl,
};

interface Props extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
	variant?: CardVariant;
	paddings?: CardPaddings;
	borderRadius?: CardRadius;
	as?: keyof HTMLElementTagNameMap;
}

export const Card = memo(
	({
		children,
		className,
		variant = "primary",
		paddings = "lg",
		borderRadius = "xl",
		as = "article",
		...props
	}: Props): JSX.Element => {
		const Tag = as;

		return (
			<Tag
				{...props}
				className={classNames(
					cls.card,
					cls[variant],
					cls[paddings],
					borderRadiusClassMap[borderRadius],
					className,
				)}
			>
				{children}
			</Tag>
		);
	},
);
