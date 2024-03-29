import { memo, ReactNode } from "react";
import { classNames, toggleFeatures } from "@/shared/lib";
import { useModal } from "@/shared/hooks";
import { Portal } from "../../redesigned/Portal";
import { Overlay } from "../../redesigned/Overlay/Overlay";
import cls from "./Modal.module.scss";

interface Props {
	children: ReactNode;
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

const ModalInner = ({ children, className, isOpen, onClose }: Props): JSX.Element | null => {
	const { isClosing, handleClose, handleContentClick } = useModal(onClose);
	const bgColorCls = toggleFeatures({
		name: "isAppRedesigned",
		on: () => cls.bgRedesigned,
		off: () => cls.bg,
	});

	if (!isOpen) {
		return null;
	}

	return (
		<Portal>
			<Overlay onClose={handleClose} isOpen={isOpen} isClose={isClosing} data-testid="modal-test">
				<div
					className={classNames(cls.content, bgColorCls, className, {
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

export const Modal = memo(ModalInner);
