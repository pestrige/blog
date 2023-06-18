import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Button, Skeleton } from "@/shared/ui";
import { useProfileFormSelector, useProfileLoadingSelector } from "../../model";
import cls from "./EditableProfileHeader.module.scss";

interface Props {
	readonly: boolean;
	isEditable: boolean;
	onEditClick: () => void;
	onCancelClick: () => void;
	onSaveClick: () => void;
}

export const Redesigned = memo(function Redesigned({
	readonly,
	isEditable,
	onSaveClick,
	onEditClick,
	onCancelClick,
}: Props): JSX.Element {
	const { t } = useTranslation("profile");
	const profile = useProfileFormSelector();
	const isLoading = useProfileLoadingSelector();

	if (isLoading) {
		return (
			<div className={cls.headerLoading}>
				<Skeleton border="50%" width={100} height={100} />
			</div>
		);
	}

	return (
		<div className={cls.header}>
			<div>
				{!readonly && isEditable && (
					<Button variant="rounded-outline" onClick={onCancelClick} borderColor="error">
						{t("Отменить", { ns: "translation" })}
					</Button>
				)}
			</div>
			<Avatar src={profile?.avatar} alt={profile?.first ?? ""} />
			<div>
				{isEditable && readonly && (
					<Button variant="rounded-outline" onClick={onEditClick}>
						{t("Редактировать")}
					</Button>
				)}
				{isEditable && !readonly && (
					<Button variant="rounded-outline" onClick={onSaveClick} borderColor="success">
						{t("Сохранить", { ns: "translation" })}
					</Button>
				)}
			</div>
		</div>
	);
});
