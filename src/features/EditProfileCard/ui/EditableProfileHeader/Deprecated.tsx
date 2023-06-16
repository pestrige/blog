import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { ButtonDeprecated, ButtonTheme, HStack, TextDeprecated } from "@/shared/ui";

interface Props {
	readonly: boolean;
	isEditable: boolean;
	onEditClick: () => void;
	onCancelClick: () => void;
	onSaveClick: () => void;
}

export const Deprecated = memo(function Deprecated({
	readonly,
	isEditable,
	onSaveClick,
	onEditClick,
	onCancelClick,
}: Props): JSX.Element {
	const { t } = useTranslation("profile");

	if (!isEditable) {
		return (
			<div className="big-margin">
				<TextDeprecated title={t("Профиль")} />
			</div>
		);
	}

	return (
		<HStack justify="between" className="big-margin">
			<TextDeprecated title={t("Профиль")} titleTag="h1" />
			{readonly && (
				<ButtonDeprecated dataTestId="ProfileCard.EditBtn" onClick={onEditClick}>
					{t("Редактировать")}
				</ButtonDeprecated>
			)}

			{!readonly && (
				<HStack>
					<ButtonDeprecated
						dataTestId="ProfileCard.CancelBtn"
						theme={ButtonTheme.OUTLINE_ERROR}
						onClick={onCancelClick}
					>
						{t("Отменить", { ns: "translation" })}
					</ButtonDeprecated>
					<ButtonDeprecated dataTestId="ProfileCard.SaveBtn" onClick={onSaveClick}>
						{t("Сохранить", { ns: "translation" })}
					</ButtonDeprecated>
				</HStack>
			)}
		</HStack>
	);
});
