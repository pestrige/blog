import { classNames } from "shared/lib";
import { Button, ButtonTheme } from "shared/ui";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features";
import cls from "./Navbar.module.scss";

interface Props {
	className?: string;
}

export const Navbar = ({ className }: Props): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();

	const toggleUserModal = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	return (
		<div className={classNames(cls.wrapper, className)}>
			<ul className={cls.links}>
				<li className={cls.mainLink}>
					<Button onClick={toggleUserModal} theme={ButtonTheme.CLEAR_INVERTED}>
						{t("Войти")}
					</Button>
				</li>
			</ul>

			<LoginModal isOpen={isOpen} onClose={toggleUserModal} />
		</div>
	);
};
