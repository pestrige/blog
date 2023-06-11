import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ButtonDeprecated, ButtonTheme, HStack, Text } from "@/shared/ui";
import { useAppDispatch } from "@/shared/hooks";
import {
	profileActions,
	updateProfileData,
	useIsEditAllowSelector,
	useProfileReadonlySelector,
} from "../../model";

export const EditableProfileHeader = memo((): JSX.Element => {
	const { t } = useTranslation("profile");
	const dispatch = useAppDispatch();
	const readonly = useProfileReadonlySelector();
	const isEditable = useIsEditAllowSelector();

	const handleEditClick = useCallback(() => dispatch(profileActions.setReadonly(false)), [dispatch]);
	const handleCancelClick = useCallback(() => dispatch(profileActions.cancelEdit()), [dispatch]);
	const handleSaveClick = useCallback(() => dispatch(updateProfileData()), [dispatch]);

	if (!isEditable) {
		return (
			<div className="big-margin">
				<Text title={t("Профиль")} />
			</div>
		);
	}

	return (
		<HStack justify="between" className="big-margin">
			<Text title={t("Профиль")} titleTag="h1" />
			{readonly && (
				<ButtonDeprecated dataTestId="ProfileCard.EditBtn" onClick={handleEditClick}>
					{t("Редактировать")}
				</ButtonDeprecated>
			)}

			{!readonly && (
				<HStack>
					<ButtonDeprecated
						dataTestId="ProfileCard.CancelBtn"
						theme={ButtonTheme.OUTLINE_ERROR}
						onClick={handleCancelClick}
					>
						{t("Отменить", { ns: "translation" })}
					</ButtonDeprecated>
					<ButtonDeprecated dataTestId="ProfileCard.SaveBtn" onClick={handleSaveClick}>
						{t("Сохранить", { ns: "translation" })}
					</ButtonDeprecated>
				</HStack>
			)}
		</HStack>
	);
});
