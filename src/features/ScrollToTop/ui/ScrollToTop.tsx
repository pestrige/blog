import React, { memo, useCallback, useEffect, useState } from "react";
import { ScrollArrowIcon } from "@/shared/assets";
import { useDebounceCallback } from "@/shared/hooks";
import { ButtonIcon } from "@/shared/ui";

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

	return <ButtonIcon Svg={ScrollArrowIcon} onClick={handleScrollToTop} />;
});
