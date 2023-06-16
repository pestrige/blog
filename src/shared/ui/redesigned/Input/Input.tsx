import React, { InputHTMLAttributes, ChangeEvent, memo, useEffect, useRef } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly" | "name">;

interface Props extends HTMLInputProps {
	name: string;
	className?: string;
	value?: string;
	label?: string;
	error?: string;
	onChange?: (value: string, name: string) => void;
	autofocus?: boolean;
	readonly?: boolean;
	Icon?: React.FC<React.SVGProps<SVGSVGElement>>;

	dataTestInputId?: string;
	dataTestErrorId?: string;
}

export const Input = memo((props: Props) => {
	const {
		name,
		className,
		value,
		label,
		onChange,
		type = "text",
		placeholder,
		autofocus = false,
		readonly = false,
		error = "",
		dataTestInputId,
		dataTestErrorId,
		Icon,
		...otherProps
	} = props;
	const ref = useRef<HTMLInputElement>(null);
	const wrapperClasses = classNames(cls.root, { [cls.readonly]: readonly }, className);

	const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		onChange?.(evt.target.value, name);
	};

	useEffect(() => {
		if (autofocus) {
			ref.current?.focus();
		}
	}, [autofocus]);

	return (
		<div className={wrapperClasses}>
			{!!label && <label htmlFor={name}>{label}:</label>}
			<div className={cls.inner}>
				{!!Icon && <Icon className={cls.icon} />}
				<input
					id={name}
					name={name}
					ref={ref}
					type={type}
					value={value}
					onChange={onChangeHandler}
					className={classNames(cls.input, { [cls.leftPadding]: !!Icon })}
					readOnly={readonly}
					placeholder={placeholder}
					data-testid={dataTestInputId}
					{...otherProps}
				/>
				{!!error && (
					<span className={cls.error} data-testid={dataTestErrorId}>
						{error}
					</span>
				)}
			</div>
		</div>
	);
});
