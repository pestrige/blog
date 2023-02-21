import { memo, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib";
import { Portal } from "shared/ui";
import cls from "./Modal.module.scss";

const ANIMATION_DELAY = 300;

interface Props {
	children: ReactNode;
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

const ModalInner = ({ children, className, isOpen, onClose }: Props): JSX.Element => {
	const ref = useRef<ReturnType<typeof setTimeout>>();
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = useCallback(() => {
		setIsClosing(true);
		ref.current = setTimeout(() => {
			setIsClosing(false);
			onClose();
		}, ANIMATION_DELAY);
	}, [onClose]);

	const handleContentClick = (evt: MouseEvent<HTMLDivElement>) => {
		evt.stopPropagation();
	};

	const handleKeyDown = useCallback(
		(evt: KeyboardEvent) => {
			if (evt.key === "Escape") {
				handleClose();
			}
		},
		[handleClose]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", handleKeyDown);
		}

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, handleKeyDown]);

	useEffect(() => {
		return () => clearTimeout(ref.current);
	}, []);

	if (!isOpen) {
		return null;
	}

	return (
		<Portal>
			<div
				data-testid="modal-test"
				className={classNames(cls.overlay, { [cls.open]: isOpen, [cls.close]: isClosing })}
				onClick={handleClose}
				role="presentation"
			>
				<div
					className={classNames(cls.content, className)}
					onClick={handleContentClick}
					role="presentation"
				>
					{children}
				</div>
			</div>
		</Portal>
	);
};

export const Modal = memo(ModalInner);
