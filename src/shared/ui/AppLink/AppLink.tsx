import { memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface Props extends LinkProps {
	theme?: AppLinkTheme;
}

export const AppLink = memo(
	({ className, children, theme = AppLinkTheme.PRIMARY, ...otherProps }: Props): JSX.Element => {
		return (
			<Link className={classNames(cls.link, cls[theme], className)} {...otherProps}>
				{children}
			</Link>
		);
	}
);
