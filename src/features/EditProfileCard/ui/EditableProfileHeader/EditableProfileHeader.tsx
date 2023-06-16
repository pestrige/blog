import React, { memo, useCallback } from "react";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { useAppDispatch } from "@/shared/hooks";
import {
	profileActions,
	updateProfileData,
	useIsEditAllowSelector,
	useProfileReadonlySelector,
} from "../../model";
import { Deprecated } from "./Deprecated";
import { Redesigned } from "./Redesigned";

export const EditableProfileHeader = memo((): JSX.Element => {
	const dispatch = useAppDispatch();
	const readonly = useProfileReadonlySelector();
	const isEditable = useIsEditAllowSelector();

	const handleEditClick = useCallback(() => dispatch(profileActions.setReadonly(false)), [dispatch]);
	const handleCancelClick = useCallback(() => dispatch(profileActions.cancelEdit()), [dispatch]);
	const handleSaveClick = useCallback(() => dispatch(updateProfileData()), [dispatch]);

	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={
				<Redesigned
					readonly={readonly}
					onCancelClick={handleCancelClick}
					onEditClick={handleEditClick}
					onSaveClick={handleSaveClick}
					isEditable={isEditable}
				/>
			}
			off={
				<Deprecated
					readonly={readonly}
					onCancelClick={handleCancelClick}
					onEditClick={handleEditClick}
					onSaveClick={handleSaveClick}
					isEditable={isEditable}
				/>
			}
		/>
	);
});
