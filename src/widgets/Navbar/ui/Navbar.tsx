import { classNames } from "shared/lib";
import { Button, ButtonTheme, Text } from "shared/ui";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features";
import { userActions, useUser } from "entities/User";
import { useDispatch } from "react-redux";
import cls from "./Navbar.module.scss";

interface Props {
	className?: string;
}

export const Navbar = ({ className }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const { isAuth, username } = useUser();
	const [isOpen, setIsOpen] = useState(false);

	const toggleUserModal = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const handleLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if (isAuth) {
		return (
			<div className={classNames(cls.wrapper, className)}>
				<ul className={cls.links}>
					<li className={cls.mainLink}>
						<Text text={username} />
					</li>
					<li>
						<Button onClick={handleLogout} theme={ButtonTheme.CLEAR_INVERTED}>
							{t("Выйти")}
						</Button>
					</li>
				</ul>
			</div>
		);
	}

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
