import { classNames } from "shared/lib";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme, Input, Loader, Text, TextTheme } from "shared/ui";
import { useDispatch } from "react-redux";
import { FormEvent, memo, useCallback } from "react";
import {
	loginActions,
	loginByUsername,
	useLoginErrorSelector,
	useLoginLoadingSelector,
	useLoginPasswordSelector,
	useLoginUsernameSelector,
} from "../../model";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const username = useLoginUsernameSelector();
	const password = useLoginPasswordSelector();
	const error = useLoginErrorSelector();
	const isLoading = useLoginLoadingSelector();

	const handleUsernameChange = useCallback(
		(usernameValue: string) => {
			dispatch(loginActions.setUsername(usernameValue));
		},
		[dispatch]
	);

	const handlePasswordChange = useCallback(
		(passwordValue: string) => {
			dispatch(loginActions.setPassword(passwordValue));
		},
		[dispatch]
	);

	const handleSubmit = useCallback(
		(evt: FormEvent<HTMLFormElement>) => {
			evt.preventDefault();
			dispatch(loginByUsername({ username, password }));
		},
		[dispatch, username, password]
	);

	return (
		<form className={classNames(cls.LoginForm, className)} onSubmit={handleSubmit}>
			<Text title={t("Форма авторизации")} />
			{!!error && <Text theme={TextTheme.ERROR} text={error} />}
			<Input
				autofocus
				type="text"
				className={cls.input}
				placeholder={t("Введите username")}
				onChange={handleUsernameChange}
				value={username}
			/>
			<Input
				type="text"
				className={cls.input}
				placeholder={t("Введите пароль")}
				onChange={handlePasswordChange}
				value={password}
			/>
			<Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn} type="submit" disabled={isLoading}>
				{isLoading ? <Loader size="S" /> : t("Войти")}
			</Button>
		</form>
	);
});
