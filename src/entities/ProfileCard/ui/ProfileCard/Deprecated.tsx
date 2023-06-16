import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { CurrencySelect } from "@/entities/Currency";
import { CountrySelect } from "@/entities/Country";
import { classNames } from "@/shared/lib";
import { AvatarDeprecated, InputDeprecated, Loader, TextDeprecated, VStack } from "@/shared/ui";
import { profileInputs, translationValidateErrors } from "../../model/constants/constants";
import { getTranslateErrors } from "../../model/lib/getTranslateErrors";
import { ProfileCardProps } from "./ProfileCard";
import cls from "./ProfileCard.module.scss";

export const Deprecated = memo(function Deprecated({
	profile,
	isLoading,
	error,
	readonly,
	validateErrors,
	onInputChange,
	onSubmit,
}: ProfileCardProps): JSX.Element {
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
				<TextDeprecated
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
				<AvatarDeprecated src={profile.avatar} className={cls.avatar} alt={profile.first ?? ""} />
			)}

			<VStack max as="ul">
				{profileInputs.map(({ name, label }) => {
					const adaptedValue = profile ? profile[name]?.toString() : "";
					const inputError = getTranslateErrors(validateErrors, name);

					return (
						<li key={name} className={cls.listITem}>
							<InputDeprecated
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
});
