import { ChangeEvent, memo, useMemo } from "react";
import { classNames } from "shared/lib";
import cls from "./Select.module.scss";

export interface SelectOption {
	value: string;
	content: string;
}

interface SelectProps {
	name: string;
	className?: string;
	label?: string;
	options?: SelectOption[];
	value?: string;
	onChange?: (value: string, name: string) => void;
	readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
	const { name, className, label, options, onChange, value, readonly } = props;

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange(e.target.value, name);
		}
	};

	const optionsList = useMemo(
		() =>
			options?.map((opt) => (
				<option className={cls.option} value={opt.value} key={opt.value}>
					{opt.content}
				</option>
			)),
		[options]
	);

	return (
		<div className={classNames(cls.wrapper, className)}>
			{label && <span className={cls.label}>{`${label}>`}</span>}
			<select disabled={readonly} className={cls.select} value={value} onChange={onChangeHandler}>
				{optionsList}
			</select>
		</div>
	);
});
