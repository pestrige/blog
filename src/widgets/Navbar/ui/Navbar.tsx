import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { LoginModal } from "@/features/AuthByUsername";
import { NotificationButton } from "@/features/NotificationButton";
import { AvatarDropdown } from "@/features/AvatarDropdown";
import { useUser } from "@/entities/User";
import { AppLink, AppLinkTheme, Button, ButtonTheme, HStack, Text } from "@/shared/ui";
import { classNames } from "@/shared/lib";
import { RoutePaths } from "@/shared/constants";
import cls from "./Navbar.module.scss";

interface Props {
	className?: string;
}

export const Navbar = memo(({ className }: Props): JSX.Element => {
	const { t } = useTranslation();
	const { isAuth, username } = useUser();
	const [isOpen, setIsOpen] = useState(false);

	const toggleUserModal = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

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
					<Button onClick={toggleUserModal} theme={ButtonTheme.CLEAR_INVERTED}>
						{t("Войти")}
					</Button>
				</li>
			</menu>

			<LoginModal isOpen={isOpen} onClose={toggleUserModal} />
		</HStack>
	);
});
