import React from "react";
import { Modal } from "shared/ui";
import { LoginForm } from "../LoginForm/LoginForm";

interface Props {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({ className = "", isOpen, onClose }: Props): JSX.Element => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} className={className}>
			<LoginForm />
		</Modal>
	);
};
