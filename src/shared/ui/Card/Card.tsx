import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "shared/lib";
import cls from "./Card.module.scss";

type CardVariant = "primary" | "outlined";

interface Props extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
	variant?: CardVariant;
}

export const Card = memo(({ children, className, variant = "primary", ...props }: Props): JSX.Element => {
	return (
		<article {...props} className={classNames(cls.card, cls[variant], className)}>
			{children}
		</article>
	);
});
