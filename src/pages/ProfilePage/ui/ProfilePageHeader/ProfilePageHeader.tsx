import React, { memo, useCallback } from "react";
import { Button, ButtonTheme, Text } from "shared/ui";
import { useTranslation } from "react-i18next";
import { profileActions, useProfileReadonlySelector, updateProfileData } from "features/EditProfileCard";
import { useAppDispatch } from "shared/hooks";
import cls from "./ProfilePageHeader.module.scss";

export const ProfilePageHeader = memo((): JSX.Element => {
	const { t } = useTranslation("profile");
	const dispatch = useAppDispatch();
	const readonly = useProfileReadonlySelector();

	const handleEditClick = useCallback(() => dispatch(profileActions.setReadonly(false)), [dispatch]);
	const handleCancelClick = useCallback(() => dispatch(profileActions.cancelEdit()), [dispatch]);
	const handleSaveClick = useCallback(() => dispatch(updateProfileData()), [dispatch]);

	return (
		<div className={cls.header}>
			<Text title={t("Профиль")} />
			{readonly && (
				<Button className={cls.editButton} onClick={handleEditClick}>
					{t("Редактировать")}
				</Button>
			)}

			{!readonly && (
				<div className={cls.buttons}>
					<Button
						className={cls.cancelButton}
						theme={ButtonTheme.OUTLINE_ERROR}
						onClick={handleCancelClick}
					>
						{t("Отменить", { ns: "translation" })}
					</Button>
					<Button onClick={handleSaveClick}>{t("Сохранить", { ns: "translation" })}</Button>
				</div>
			)}
		</div>
	);
});
