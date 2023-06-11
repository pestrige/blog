import { memo, ReactNode } from "react";
import { classNames } from "@/shared/lib";
import { useModal } from "@/shared/hooks";
import { Portal } from "../Portal";
import { Overlay } from "../Overlay/Overlay";
import cls from "./Modal.module.scss";

interface Props {
	children: ReactNode;
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

const ModalInner = ({ children, className, isOpen, onClose }: Props): JSX.Element | null => {
	const { isClosing, handleClose, handleContentClick } = useModal(onClose);

	if (!isOpen) {
		return null;
	}

	return (
		<Portal>
			<Overlay onClose={handleClose} isOpen={isOpen} isClose={isClosing} data-testid="modal-test">
				<div
					className={classNames(cls.content, className, {
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
};

/**
 * @deprecated
 */

export const Modal = memo(ModalInner);
