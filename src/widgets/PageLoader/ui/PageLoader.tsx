import React from "react";
import { HStack, Loader } from "shared/ui";
import cls from "./PageLoader.module.scss";

export const PageLoader = (): JSX.Element => {
	return (
		<HStack justify="center" align="center" className={cls.root}>
			<Loader />
		</HStack>
	);
};
