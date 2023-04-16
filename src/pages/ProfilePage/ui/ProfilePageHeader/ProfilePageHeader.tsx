import React, { memo, useCallback } from "react";
import { Button, ButtonTheme, HStack, Text } from "shared/ui";
import { useTranslation } from "react-i18next";
import {
	profileActions,
	useProfileReadonlySelector,
	useIsEditAllowSelector,
	updateProfileData,
} from "features/EditProfileCard";
import { useAppDispatch } from "shared/hooks";
import cls from "./ProfilePageHeader.module.scss";

export const ProfilePageHeader = memo((): JSX.Element => {
	const { t } = useTranslation("profile");
	const dispatch = useAppDispatch();
	const readonly = useProfileReadonlySelector();
	const isEditable = useIsEditAllowSelector();

	const handleEditClick = useCallback(() => dispatch(profileActions.setReadonly(false)), [dispatch]);
	const handleCancelClick = useCallback(() => dispatch(profileActions.cancelEdit()), [dispatch]);
	const handleSaveClick = useCallback(() => dispatch(updateProfileData()), [dispatch]);

	if (!isEditable) {
		return (
			<div className={cls.header}>
				<Text title={t("Профиль")} />
			</div>
		);
	}

	return (
		<HStack justify="between" className={cls.header}>
			<Text title={t("Профиль")} titleTag="h1" />
			{readonly && (
				<Button className={cls.editButton} onClick={handleEditClick}>
					{t("Редактировать")}
				</Button>
			)}

			{!readonly && (
				<HStack>
					<Button theme={ButtonTheme.OUTLINE_ERROR} onClick={handleCancelClick}>
						{t("Отменить", { ns: "translation" })}
					</Button>
					<Button onClick={handleSaveClick}>{t("Сохранить", { ns: "translation" })}</Button>
				</HStack>
			)}
		</HStack>
	);
});
