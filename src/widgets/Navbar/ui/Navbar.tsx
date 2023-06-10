import { memo, useCallback, useState } from "react";

import { useUser } from "@/entities/User";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { NavbarDeprecated } from "./NavbarDeprecated";
import { NavbarRedesigned } from "./NavbarRedesigned";

interface Props {
	className?: string;
}

export const Navbar = memo(({ className }: Props): JSX.Element => {
	const { isAuth, username } = useUser();
	const [isOpen, setIsOpen] = useState(false);

	const toggleUserModal = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={<NavbarRedesigned isOpen={isOpen} isAuth={isAuth} onUserModal={toggleUserModal} />}
			off={
				<NavbarDeprecated
					isOpen={isOpen}
					isAuth={isAuth}
					username={username}
					className={className}
					onUserModal={toggleUserModal}
				/>
			}
		/>
	);
});
