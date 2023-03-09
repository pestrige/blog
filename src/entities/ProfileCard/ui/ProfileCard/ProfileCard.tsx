import React, { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Input, Loader, Text, TextTheme } from "shared/ui";
import { classNames } from "shared/lib";
import { CountrySelect } from "entities/Country";
import { CurrencySelect } from "entities/Currency";
import { ProfileCardType } from "../../model/types/profileCard";
import cls from "./ProfileCard.module.scss";

type ProfileCardTypeKeyof = keyof ProfileCardType;

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

interface Props {
	profile?: ProfileCardType;
	isLoading: boolean;
	error: string;
	readonly: boolean;
	onInputChange: (value: string, name: string) => void;
	onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
}

export const ProfileCard = ({
	profile,
	isLoading,
	error,
	readonly,
	onInputChange,
	onSubmit,
}: Props): JSX.Element => {
	const { t } = useTranslation("profile");

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
					text={error}
					theme={TextTheme.ERROR}
					align="center"
				/>
			</div>
		);
	}

	return (
		<form onSubmit={onSubmit} className={classNames(cls.root, { [cls.editable]: !readonly })}>
			{!!profile?.avatar && <Avatar src={profile.avatar} className={cls.avatar} />}

			<ul className={cls.list}>
				{profileInputs.map(({ name, label }) => {
					const adaptedValue = profile ? profile[name]?.toString() : "";

					return (
						<li key={name} className={cls.listITem}>
							<Input
								name={name}
								value={adaptedValue}
								placeholder={t(label)}
								className={cls.input}
								readonly={readonly}
								onChange={onInputChange}
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
			</ul>

			<button type="submit" className="visually-hidden">
				{t("Сохранить", { ns: "translation" })}
			</button>
		</form>
	);
};
