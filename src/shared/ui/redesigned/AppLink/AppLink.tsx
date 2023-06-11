import { memo } from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib";
import cls from "./AppLink.module.scss";

export type AppLinkVariant = "primary" | "secondary";

interface Props extends LinkProps {
	variant?: AppLinkVariant;
	noHover?: boolean;
	activeClassName?: string;
}

export const AppLink = memo(
	({
		className,
		children,
		variant = "primary",
		noHover = false,
		activeClassName = "",
		...otherProps
	}: Props): JSX.Element => {
		return (
			<NavLink
				className={({ isActive }) =>
					classNames(
						cls.link,
						cls[variant],
						{
							[cls.noHover]: noHover,
							[activeClassName]: isActive,
						},
						className,
					)
				}
				{...otherProps}
			>
				{children}
			</NavLink>
		);
	},
);
