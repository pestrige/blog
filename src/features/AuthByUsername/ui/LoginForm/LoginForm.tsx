import { classNames } from "shared/lib";
import { useTranslation } from "react-i18next";
import { Button, Input } from "shared/ui";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.LoginForm, className)}>
			<Input autofocus type="text" className={cls.input} placeholder={t("Введите username")} />
			<Input type="text" className={cls.input} placeholder={t("Введите пароль")} />
			<Button className={cls.loginBtn}>{t("Войти")}</Button>
		</div>
	);
};
