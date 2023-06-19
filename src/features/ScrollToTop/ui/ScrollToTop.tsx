import React, { memo, useCallback, useEffect, useState } from "react";
import { ScrollArrowIcon } from "@/shared/assets";
import { useDebounceCallback } from "@/shared/hooks";
import { ButtonIcon } from "@/shared/ui";
import cls from "./ScrollToTop.module.scss";

export const ScrollToTop = memo(function ScrollToTop(): JSX.Element | null {
	const [showScroll, setShowScroll] = useState(false);

	const scrollListener = useCallback(() => {
		const scrollPosition = window.scrollY;
		const windowHeight = window.innerHeight;

		setShowScroll(scrollPosition > windowHeight);
	}, []);

	const debouncedScrollListener = useDebounceCallback(scrollListener, 300);

	const handleScrollToTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", debouncedScrollListener);

		return () => {
			window.removeEventListener("scroll", debouncedScrollListener);
		};
	}, [debouncedScrollListener]);

	if (!showScroll) {
		return null;
	}

	return (
		<div className={cls.root}>
			<ButtonIcon Svg={ScrollArrowIcon} onClick={handleScrollToTop} />
		</div>
	);
});
