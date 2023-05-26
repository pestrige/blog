import { useTranslation } from "react-i18next";
import { FormEvent, memo, useCallback } from "react";
import { classNames } from "@/shared/lib";
import { Button, Input, Loader, Text } from "@/shared/ui";
import { ReducersList, useAppDispatch, useDynamicReducerLoader } from "@/shared/hooks";
import {
	loginActions,
	loginByUsername,
	loginReducer,
	useLoginErrorSelector,
	useLoginLoadingSelector,
	useLoginPasswordSelector,
	useLoginUsernameSelector,
} from "../../model";
import cls from "./LoginForm.module.scss";

const initialReducers: ReducersList = {
	login: loginReducer,
};

export interface LoginFormProps {
	className?: string;
	onClose: () => void;
}

const LoginForm = memo(({ className, onClose }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const username = useLoginUsernameSelector();
	const password = useLoginPasswordSelector();
	const error = useLoginErrorSelector();
	const isLoading = useLoginLoadingSelector();

	const handleUsernameChange = useCallback(
		(usernameValue: string) => {
			dispatch(loginActions.setUsername(usernameValue));
		},
		[dispatch],
	);

	const handlePasswordChange = useCallback(
		(passwordValue: string) => {
			dispatch(loginActions.setPassword(passwordValue));
		},
		[dispatch],
	);

	const handleSubmit = useCallback(
		async (evt: FormEvent<HTMLFormElement>) => {
			evt.preventDefault();
			const result = await dispatch(loginByUsername({ username, password }));
			if (result.meta.requestStatus === "fulfilled") {
				onClose();
			}
		},
		[dispatch, username, password, onClose],
	);

	useDynamicReducerLoader(initialReducers);

	return (
		<form className={classNames(cls.LoginForm, className)} onSubmit={handleSubmit}>
			<Text title={t("Форма авторизации")} />
			{!!error && <Text variant="error" text={error} />}
			<Input
				name="username"
				autofocus
				type="text"
				className={cls.input}
				placeholder={t("Введите username")}
				onChange={handleUsernameChange}
				value={username}
			/>
			<Input
				name="password"
				type="text"
				className={cls.input}
				placeholder={t("Введите пароль")}
				onChange={handlePasswordChange}
				value={password}
			/>
			<Button className={cls.loginBtn} type="submit" disabled={isLoading}>
				{isLoading ? <Loader size="S" /> : t("Войти")}
			</Button>
		</form>
	);
});

export default LoginForm;
