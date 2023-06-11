import React, { memo } from "react";
import { LogoIcon } from "@/shared/assets";
import { HStack } from "../Stack";
import cls from "./AppLogo.module.scss";
import { classNames } from "@/shared/lib";

interface Props {
	className?: string;
}

export const AppLogo = memo(function AppLogo({ className }: Props): JSX.Element {
	return (
		<HStack max justify="center" className={classNames(cls.wrapper, className)}>
			<LogoIcon className={cls.logo} />
			<div className={cls.gradientBig} />
			<div className={cls.gradientSmall} />
		</HStack>
	);
});
