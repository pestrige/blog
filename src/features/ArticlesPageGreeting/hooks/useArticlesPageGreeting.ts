import { useCallback, useEffect, useMemo, useState } from "react";
import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks";

export const useArticlesPageGreeting = () => {
	const dispatch = useAppDispatch();
	const { articlesPageHasBeenOpened } = useJsonSettings();
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	useEffect(() => {
		if (!articlesPageHasBeenOpened) {
			setIsOpen(true);
			dispatch(saveJsonSettings({ articlesPageHasBeenOpened: true }));
		}
	}, [articlesPageHasBeenOpened, dispatch]);

	return useMemo(
		() => ({
			isOpen,
			onClose: handleClose,
		}),
		[isOpen, handleClose],
	);
};
