import { classNames } from "shared/lib";
import {
	AppLink,
	AppLinkTheme,
	Avatar,
	Button,
	ButtonTheme,
	Dropdown,
	DropdownItem,
	HStack,
	Text,
} from "shared/ui";
import { memo, useCallback, useMemo, useState } from "react";
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
	const { isAuth, username, avatar, id } = useUser();
	const [isOpen, setIsOpen] = useState(false);

	const toggleUserModal = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const handleLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	const dropdownItems: DropdownItem[] = useMemo(() => {
		return [
			{ content: t("Профиль"), href: `${RoutePaths.profile}/${id}` },
			{ content: t("Выйти"), onClick: handleLogout },
		];
	}, [t, id, handleLogout]);

	if (isAuth) {
		return (
			<HStack as="header" justify="between" max className={classNames(cls.wrapper, className)}>
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
						<Dropdown
							direction="bottom right"
							trigger={<Avatar size={32} alt="avatar" src={avatar} />}
							items={dropdownItems}
						/>
					</li>
				</HStack>
			</HStack>
		);
	}

	return (
		<HStack as="header" justify="end" max className={classNames(cls.wrapper, className)}>
			<menu className={cls.menu}>
				<li className={cls.mainLink}>
					<Button onClick={toggleUserModal} theme={ButtonTheme.CLEAR_INVERTED}>
						{t("Войти")}
					</Button>
				</li>
			</menu>

			<LoginModal isOpen={isOpen} onClose={toggleUserModal} />
		</HStack>
	);
});
