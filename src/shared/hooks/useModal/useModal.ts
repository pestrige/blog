import { MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

const ANIMATION_DELAY = 300;

export const useModal = (onClose: () => void) => {
	const ref = useRef<ReturnType<typeof setTimeout> | null>(null);
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = useCallback(() => {
		setIsClosing(true);
		ref.current = setTimeout(() => {
			setIsClosing(false);
			onClose();
		}, ANIMATION_DELAY);
	}, [onClose]);

	const handleContentClick = useCallback((evt: MouseEvent<HTMLDivElement>) => {
		evt.stopPropagation();
	}, []);

	useEffect(() => {
		return () => {
			if (ref.current) {
				clearTimeout(ref.current);
			}
		};
	}, []);

	return useMemo(
		() => ({
			isClosing,
			handleClose,
			handleContentClick,
		}),
		[isClosing, handleClose, handleContentClick],
	);
};
