import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Text, Input } from "shared/ui";
import { useProfileSelector } from "../../model/selectors";
import cls from "./ProfileCard.module.scss";

export const ProfileCard = (): JSX.Element => {
	const { t } = useTranslation("profile");
	const profile = useProfileSelector();

	return (
		<div className={cls.root}>
			<div className={cls.header}>
				<Text title={t("Профиль")} />
				<Button className={cls.editButton}>{t("Редактировать")}</Button>
			</div>

			<div>
				<Input value={profile?.first} placeholder={t("Ваше имя")} className={cls.input} />
				<Input value={profile?.lastname} placeholder={t("Ваша фамилия")} className={cls.input} />
			</div>
		</div>
	);
};
