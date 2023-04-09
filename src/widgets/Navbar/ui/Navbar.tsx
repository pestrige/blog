import { classNames } from "shared/lib";
import { AppLink, AppLinkTheme, Button, ButtonTheme, Text } from "shared/ui";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { userActions, useUser } from "entities/User";
import { useAppDispatch } from "shared/hooks";
import { RoutePaths } from "shared/config";
import cls from "./Navbar.module.scss";

interface Props {
	className?: string;
}

export const Navbar = memo(({ className }: Props): JSX.Element => {
	const dispatch = useAppDispatch();
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
			<header className={classNames(cls.wrapper, className)}>
				<Text text={t("Блог о технологиях")} inverted />
				<menu className={cls.links}>
					<li className={cls.link}>
						<Text text={username} inverted />
					</li>
					<li className={cls.link}>
						<AppLink to={RoutePaths.article_create} theme={AppLinkTheme.SECONDARY}>
							<Text text={t("Создать статью")} variant="secondary" />
						</AppLink>
					</li>
					<li>
						<Button onClick={handleLogout} theme={ButtonTheme.CLEAR_INVERTED}>
							{t("Выйти")}
						</Button>
					</li>
				</menu>
			</header>
		);
	}

	return (
		<header className={classNames(cls.wrapper, className)}>
			<menu className={cls.links}>
				<li className={cls.mainLink}>
					<Button onClick={toggleUserModal} theme={ButtonTheme.CLEAR_INVERTED}>
						{t("Войти")}
					</Button>
				</li>
			</menu>

			<LoginModal isOpen={isOpen} onClose={toggleUserModal} />
		</header>
	);
});
