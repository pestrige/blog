import { memo, ReactNode } from "react";
import { useModal } from "shared/hooks";
import { classNames } from "shared/lib";
import { Portal } from "../Portal";
import { Overlay } from "../Overlay/Overlay";
import cls from "./Drawer.module.scss";

interface Props {
	className?: string;
	isOpen: boolean;
	children: ReactNode;
	onClose: () => void;
}

export const Drawer = memo(function Drawer({
	isOpen,
	children,
	className,
	onClose,
}: Props): JSX.Element | null {
	const { isClosing, handleClose, handleContentClick } = useModal(onClose);

	if (!isOpen) {
		return null;
	}

	return (
		<Portal>
			<Overlay isOpen={isOpen} isClose={isClosing} onClose={handleClose}>
				<div
					className={classNames(cls.drawer, className, {
						[cls.open]: isOpen,
						[cls.close]: isClosing,
					})}
					onClick={handleContentClick}
					role="presentation"
				>
					{children}
				</div>
			</Overlay>
		</Portal>
	);
});
