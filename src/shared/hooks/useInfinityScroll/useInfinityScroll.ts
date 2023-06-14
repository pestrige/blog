import { useEffect } from "react";

interface UseInfinityScrollArgs {
	callback?: () => void;
	trigger: HTMLElement | HTMLDivElement | null;
	wrapper: HTMLElement | HTMLDivElement | null;
}

export const useInfinityScroll = ({ callback, trigger, wrapper }: UseInfinityScrollArgs) => {
	useEffect(() => {
		if (!callback) {
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

		if (trigger) {
			observer.observe(trigger);
		}

		return () => {
			if (observer && trigger) {
				observer.unobserve(trigger);
			}
		};
	}, [callback, trigger, wrapper]);
};
