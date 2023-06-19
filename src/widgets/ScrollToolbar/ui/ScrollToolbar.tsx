import React, { memo } from "react";
import { ScrollToTop } from "@/features/ScrollToTop";
import cls from "./ScrollToolbar.module.scss";

export const ScrollToolbar = memo(function ScrollToolbar(): JSX.Element {
	return (
		<div className={cls.root}>
			<ScrollToTop />
		</div>
	);
});
