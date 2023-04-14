import { classNames } from "shared/lib";
import { AppLink, AppLinkTheme, Button, ButtonTheme, HStack, Text } from "shared/ui";
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
			<HStack justify="between" max className={classNames(cls.wrapper, className)}>
				<Text text={t("Блог о технологиях")} inverted />
				<HStack as="menu" gap={16}>
					<li>
						<Text text={username} inverted />
					</li>
					<li>
						<AppLink to={RoutePaths.article_create} theme={AppLinkTheme.SECONDARY}>
							<Text text={t("Создать статью")} variant="secondary" />
						</AppLink>
					</li>
					<li>
						<Button onClick={handleLogout} theme={ButtonTheme.CLEAR_INVERTED}>
							{t("Выйти")}
						</Button>
					</li>
				</HStack>
			</HStack>
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
