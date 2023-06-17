import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { CountrySelect } from "@/entities/Country";
import { CurrencySelect } from "@/entities/Currency";
import { classNames } from "@/shared/lib";
import { Input, Skeleton, Text } from "@/shared/ui";
import { profileInputs, translationValidateErrors } from "../../model/constants/constants";
import { getTranslateErrors } from "../../model/lib/getTranslateErrors";
import { ProfileCardProps } from "./ProfileCard";
import cls from "./ProfileCard.module.scss";

export const Redesigned = memo(function Redesigned({
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

	if (error) {
		return (
			<div className={classNames(cls.rootRedesigned, cls.error)}>
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
		<form data-testid="ProfileCard.Form" onSubmit={onSubmit} className={cls.rootRedesigned}>
			<ul className={cls.listRedesigned}>
				{profileInputs.map(({ name, label }) => {
					const adaptedValue = profile ? profile[name]?.toString() : "";
					const inputError = getTranslateErrors(validateErrors, name);

					if (isLoading) {
						return <Skeleton key={name} width="100%" height={42} />;
					}

					return (
						<li key={name} className={cls.listITem}>
							<Input
								name={name}
								value={adaptedValue}
								label={t(label)}
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
					{isLoading ? (
						<Skeleton width={250} height={42} />
					) : (
						<CountrySelect
							readonly={readonly}
							value={profile?.country}
							onChange={onInputChange}
						/>
					)}
				</li>
				<li key="currency" className={cls.listITem}>
					{isLoading ? (
						<Skeleton width={250} height={42} />
					) : (
						<CurrencySelect
							readonly={readonly}
							value={profile?.currency}
							onChange={onInputChange}
						/>
					)}
				</li>
			</ul>
		</form>
	);
});
