import React from "react";
import { Loader } from "shared/ui";
import cls from "./PageLoader.module.scss";

export const PageLoader = (): JSX.Element => {
	return (
		<div className={cls.root}>
			<Loader />
		</div>
	);
};
