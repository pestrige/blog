import { useTranslation } from "react-i18next";
import { FormEvent, memo, useCallback } from "react";
import { classNames, ToggleFeaturesWrapper, useForceUpdate } from "@/shared/lib";
import { Button, ButtonDeprecated, Input, InputDeprecated, Loader, Text, TextDeprecated } from "@/shared/ui";
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
	const forceUpdate = useForceUpdate();
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
				forceUpdate();
			}
		},
		[forceUpdate, dispatch, username, password, onClose],
	);

	useDynamicReducerLoader(initialReducers);

	return (
		<form className={classNames(cls.LoginForm, className)} onSubmit={handleSubmit}>
			<ToggleFeaturesWrapper
				featureName="isAppRedesigned"
				on={
					<>
						<Text title={t("Форма авторизации")} />
						{!!error && <Text variant="error" text={error} />}
						<Input
							label={t("Логин")}
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
							label={t("Пароль")}
							type="text"
							className={cls.input}
							placeholder={t("Введите пароль")}
							onChange={handlePasswordChange}
							value={password}
						/>
						<Button
							className={cls.loginBtn}
							type="submit"
							disabled={isLoading}
							variant="rounded-outline"
						>
							{isLoading ? <Loader size="S" /> : t("Войти")}
						</Button>
					</>
				}
				off={
					<>
						<TextDeprecated title={t("Форма авторизации")} />
						{!!error && <TextDeprecated variant="error" text={error} />}
						<InputDeprecated
							name="username"
							autofocus
							type="text"
							className={cls.input}
							placeholder={t("Введите username")}
							onChange={handleUsernameChange}
							value={username}
						/>
						<InputDeprecated
							name="password"
							type="text"
							className={cls.input}
							placeholder={t("Введите пароль")}
							onChange={handlePasswordChange}
							value={password}
						/>
						<ButtonDeprecated className={cls.loginBtn} type="submit" disabled={isLoading}>
							{isLoading ? <Loader size="S" /> : t("Войти")}
						</ButtonDeprecated>
					</>
				}
			/>
		</form>
	);
});

export default LoginForm;
