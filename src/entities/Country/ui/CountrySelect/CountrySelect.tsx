import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "@/shared/ui";
import { Country } from "../../model/constants/country";

interface CountrySelectProps {
	className?: string;
	value?: Country;
	onChange?: (value: Country, name: string) => void;
	readonly?: boolean;
}

const options = Object.entries(Country).map(([, value]) => ({
	value,
	content: value,
}));

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
	const { t } = useTranslation();

	const onChangeHandler = useCallback(
		(value: Country, name: string) => {
			onChange?.(value, name);
		},
		[onChange]
	);

	return (
		<Select
			name="country"
			className={className}
			label={t("Укажите страну")}
			options={options}
			value={value}
			onChange={onChangeHandler}
			readonly={readonly}
		/>
	);
});
