import { FormEvent, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Input, InputDeprecated, ButtonDeprecated, ButtonIcon } from "@/shared/ui";
import { classNames, toggleFeatures, ToggleFeaturesWrapper } from "@/shared/lib";
import { SearchIcon, SendIcon } from "@/shared/assets";
import { ReducersList, useAppDispatch, useDynamicReducerLoader } from "@/shared/hooks";
import { useCommentErrorSelector, useCommentSelector } from "../../model/selectors/addCommentSelectors";
import { addCommentActions, addCommentReducer } from "../../model/slice/addCommentSlice";
import cls from "./AddCommentForm.module.scss";

const reducersList: ReducersList = {
	addCommentForm: addCommentReducer,
};

export interface Props {
	className?: string;
	onSubmit: (value: string) => void;
}

const AddCommentForm = memo(({ className, onSubmit }: Props): JSX.Element => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const comment = useCommentSelector();
	const error = useCommentErrorSelector();
	const { setComment } = addCommentActions;
	const formCls = toggleFeatures({
		name: "isAppRedesigned",
		on: () => cls.formRedesigned,
		off: () => cls.form,
	});

	useDynamicReducerLoader(reducersList);

	const handleCommentChange = useCallback(
		(value: string) => {
			dispatch(setComment(value));
		},
		[dispatch, setComment],
	);

	const handleSubmit = useCallback(
		(evt: FormEvent<HTMLFormElement>) => {
			evt.preventDefault();
			onSubmit(comment);
			handleCommentChange("");
		},
		[onSubmit, comment, handleCommentChange],
	);

	return (
		<form className={classNames(formCls, className)} onSubmit={handleSubmit}>
			<ToggleFeaturesWrapper
				featureName="isAppRedesigned"
				on={
					<>
						<Input
							name="comment"
							placeholder={t("Напишите комментарий")}
							value={comment}
							error={error}
							onChange={handleCommentChange}
							dataTestInputId="CommentForm.Input"
							Icon={SearchIcon}
						/>
						<ButtonIcon Svg={SendIcon} dataTestId="CommentForm.Submit" type="submit" />
					</>
				}
				off={
					<>
						<InputDeprecated
							name="comment"
							placeholder={t("Напишите комментарий")}
							value={comment}
							error={error}
							onChange={handleCommentChange}
							dataTestInputId="CommentForm.Input"
						/>
						<ButtonDeprecated dataTestId="CommentForm.Submit" type="submit">
							{t("Отправить")}
						</ButtonDeprecated>
					</>
				}
			/>
		</form>
	);
});

export default AddCommentForm;
