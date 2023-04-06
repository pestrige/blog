import { useEffect, useRef } from "react";

export const useDebounceCallback = (callback: (...args: any[]) => void, delay = 500) => {
	const timer = useRef<ReturnType<typeof setTimeout>>();

	const debouncedFunction = (...args: any[]) => {
		const newTimer = setTimeout(() => {
			callback(...args);
		}, delay);

		if (timer.current) {
			clearTimeout(timer.current);
		}

		timer.current = newTimer;
	};

	useEffect(() => {
		return () => {
			if (!timer.current) {
				return;
			}
			clearTimeout(timer.current);
		};
	}, []);

	return debouncedFunction;
};
