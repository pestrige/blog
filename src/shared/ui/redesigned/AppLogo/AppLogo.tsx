import React, { memo } from "react";
import { LogoIcon } from "@/shared/assets";
import { HStack } from "../Stack";
import cls from "./AppLogo.module.scss";
import { classNames } from "@/shared/lib";

interface Props {
	className?: string;
	isSmall?: boolean;
}

export const AppLogo = memo(function AppLogo({ className, isSmall = false }: Props): JSX.Element {
	return (
		<HStack max justify="center" className={classNames(cls.wrapper, className)}>
			<LogoIcon className={classNames(cls.logo, { [cls.small]: isSmall })} />
			<div className={cls.gradientBig} />
			<div className={cls.gradientSmall} />
		</HStack>
	);
});
