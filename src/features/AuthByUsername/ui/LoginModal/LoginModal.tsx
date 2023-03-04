import React, { memo, Suspense } from "react";
import { Loader, Modal } from "shared/ui";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";

interface Props {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = memo(({ className = "", isOpen, onClose }: Props): JSX.Element => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} className={className}>
			<Suspense fallback={<Loader size="M" />}>
				<LoginFormLazy onClose={onClose} />
			</Suspense>
		</Modal>
	);
});
