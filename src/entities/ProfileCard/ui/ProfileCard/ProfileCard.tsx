import React, { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Input, Loader, Text, VStack } from "@/shared/ui";
import { classNames } from "@/shared/lib";
import { CountrySelect } from "@/entities/Country";
import { CurrencySelect } from "@/entities/Currency";
import { translationValidateErrors, ValidateErrorsEnum } from "../../model/constants/constants";
import { ProfileCardType, ProfileCardTypeKeyof, ValidateErrors } from "../../model/types/profileCard";
import cls from "./ProfileCard.module.scss";

interface ProfileInputsItem {
	name: ProfileCardTypeKeyof;
	label: string;
}

const profileInputs: ProfileInputsItem[] = [
	{ name: "first", label: "Ваше имя" },
	{ name: "lastname", label: "Ваша фамилия" },
	{ name: "age", label: "Ваш возраст" },
	{ name: "city", label: "Ваш город" },
	{ name: "username", label: "Ваш ник" },
	{ name: "avatar", label: "Ваш аватар" },
];

const getTranslateErrors = (errors: ValidateErrors, field: ProfileCardTypeKeyof): string => {
	if (errors[field]) {
		const errorName = errors[field];
		if (errorName) {
			return translationValidateErrors[errorName] ?? "";
		}
	}
	return "";
};

interface Props {
	profile?: ProfileCardType;
	isLoading: boolean;
	error?: ValidateErrorsEnum;
	validateErrors: ValidateErrors;
	readonly: boolean;
	onInputChange: (value: string, name: string) => void;
	onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
}

export const ProfileCard = ({
	profile,
	isLoading,
	error,
	readonly,
	validateErrors,
	onInputChange,
	onSubmit,
}: Props): JSX.Element => {
	const { t } = useTranslation("profile");
	const errorText = error ? translationValidateErrors[error] : undefined;

	if (isLoading) {
		return (
			<div className={classNames(cls.root, cls.loading)}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className={classNames(cls.root, cls.error)}>
				<Text
					title={t("Ошибка загрузки профиля")}
					text={errorText ? t(errorText) : undefined}
					variant="error"
					align="center"
				/>
			</div>
		);
	}

	return (
		<form
			data-testid="ProfileCard.Form"
			onSubmit={onSubmit}
			className={classNames(cls.root, { [cls.editable]: !readonly })}
		>
			{!!profile?.avatar && (
				<Avatar src={profile.avatar} className={cls.avatar} alt={profile.first ?? ""} />
			)}

			<VStack max as="ul">
				{profileInputs.map(({ name, label }) => {
					const adaptedValue = profile ? profile[name]?.toString() : "";
					const inputError = getTranslateErrors(validateErrors, name);

					return (
						<li key={name} className={cls.listITem}>
							<Input
								name={name}
								value={adaptedValue}
								placeholder={t(label)}
								className={cls.input}
								readonly={readonly}
								onChange={onInputChange}
								error={inputError}
								dataTestInputId={`ProfileCard.Input.${name}`}
								dataTestErrorId={`ProfileCard.Error.${name}`}
							/>
						</li>
					);
				})}

				<li key="country" className={cls.listITem}>
					<CountrySelect readonly={readonly} value={profile?.country} onChange={onInputChange} />
				</li>
				<li key="currency" className={cls.listITem}>
					<CurrencySelect readonly={readonly} value={profile?.currency} onChange={onInputChange} />
				</li>
			</VStack>

			<button type="submit" className="visually-hidden">
				{t("Сохранить", { ns: "translation" })}
			</button>
		</form>
	);
};
