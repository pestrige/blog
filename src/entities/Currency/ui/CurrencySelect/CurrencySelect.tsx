import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "@/shared/ui";
import { Currency } from "../../model/constants/currency";

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	onChange?: (value: Currency, name: string) => void;
	readonly?: boolean;
}

const options = Object.entries(Currency).map(([, value]) => ({ value, content: value }));

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
	const { t } = useTranslation();

	const onChangeHandler = useCallback(
		(value: Currency, name: string) => {
			onChange?.(value, name);
		},
		[onChange],
	);

	return (
		<Select
			name="currency"
			className={className}
			label={t("Укажите валюту")}
			options={options}
			value={value}
			onChange={onChangeHandler}
			readonly={readonly}
		/>
	);
});
