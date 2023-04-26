import { HTMLAttributes, memo, ReactNode, useCallback, useEffect } from "react";
import { classNames } from "shared/lib";
import cls from "./Overlay.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	isOpen: boolean;
	isClose: boolean;
	onClose: () => void;
}

export const Overlay = memo(function Overlay({
	children,
	isOpen,
	isClose,
	onClose,
	...otherProps
}: Props): JSX.Element {
	const handleKeyDown = useCallback(
		(evt: KeyboardEvent) => {
			if (evt.key === "Escape") {
				onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", handleKeyDown);
		}

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, handleKeyDown]);

	return (
		<div
			className={classNames(cls.overlay, {
				[cls.open]: isOpen,
				[cls.close]: isClose,
			})}
			onClick={onClose}
			role="presentation"
			{...otherProps}
		>
			{children}
		</div>
	);
});
