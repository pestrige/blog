import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "shared/lib";
import cls from "./Card.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
}

export const Card = memo(({ children, className, ...props }: Props): JSX.Element => {
	return (
		<article {...props} className={classNames(cls.card, className)}>
			{children}
		</article>
	);
});
