import { RefObject, useEffect } from "react";

interface UseInfinityScrollArgs {
	callback?: () => void;
	triggerRef: RefObject<HTMLElement | HTMLDivElement>;
	wrapperRef: RefObject<HTMLElement | HTMLDivElement>;
}

export const useInfinityScroll = ({ callback, triggerRef, wrapperRef }: UseInfinityScrollArgs) => {
	const wrapper = wrapperRef.current;
	const trigger = triggerRef.current;

	useEffect(() => {
		if (!callback || !trigger) {
			return () => {};
		}

		const options = {
			root: wrapper,
			rootMargin: "0px",
			threshold: 1.0,
		};
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				callback();
			}
		}, options);

		observer.observe(trigger);

		return () => {
			if (observer) {
				observer.unobserve(trigger);
			}
		};
	}, [callback, trigger, wrapper]);
};
