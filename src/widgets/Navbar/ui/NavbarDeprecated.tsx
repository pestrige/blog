import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib";
import {
	AppLinkDeprecated,
	AppLinkTheme,
	ButtonDeprecated,
	ButtonTheme,
	HStack,
	TextDeprecated,
} from "@/shared/ui";
import { getRoute } from "@/shared/constants";
import { NotificationButton } from "@/features/NotificationButton";
import { AvatarDropdown } from "@/features/AvatarDropdown";
import { LoginModal } from "@/features/AuthByUsername";
import cls from "./Navbar.module.scss";

interface Props {
	isAuth: boolean;
	isOpen: boolean;
	username?: string;
	className?: string;
	onUserModal: () => void;
}

export const NavbarDeprecated = memo(function NavbarDeprecated({
	isAuth,
	isOpen,
	username,
	className,
	onUserModal,
}: Props): JSX.Element {
	const { t } = useTranslation();

	if (isAuth) {
		return (
			<HStack as="header" justify="between" max className={classNames(cls.wrapper, className)}>
				<TextDeprecated text={t("Блог о технологиях")} inverted />
				<HStack as="menu" gap={16}>
					<li>
						<TextDeprecated text={username} inverted />
					</li>

					<li>
						<AppLinkDeprecated to={getRoute.articleCreate()} theme={AppLinkTheme.SECONDARY}>
							<TextDeprecated text={t("Создать статью")} variant="secondary" />
						</AppLinkDeprecated>
					</li>

					<NotificationButton />

					<AvatarDropdown />
				</HStack>
			</HStack>
		);
	}
	return (
		<HStack as="header" justify="end" max className={classNames(cls.wrapper, className)}>
			<menu className={cls.menu}>
				<li className={cls.mainLink}>
					<ButtonDeprecated onClick={onUserModal} theme={ButtonTheme.CLEAR_INVERTED}>
						{t("Войти")}
					</ButtonDeprecated>
				</li>
			</menu>

			<LoginModal isOpen={isOpen} onClose={onUserModal} />
		</HStack>
	);
});
